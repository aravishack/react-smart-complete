import * as React from 'react';
import { useRef, useEffect, useLayoutEffect, useCallback, useMemo, CSSProperties } from 'react';
import { SmartAutocompleteProps } from './types';
import styles from './SmartAutocomplete.module.css';

/**
 * SmartAutocomplete - Gmail-style inline text completion component
 * 
 * Shows a gray suggestion text after the cursor that can be accepted with Tab key.
 * The parent component provides the completion logic via the `completion` prop.
 * 
 * @example
 * ```tsx
 * <SmartAutocomplete
 *   value={text}
 *   onChange={setText}
 *   completion="suggestion text"
 *   placeholder="Start typing..."
 * />
 * ```
 */
const SmartAutocomplete: React.FC<SmartAutocompleteProps> = ({
  // Core props
  value,
  onChange,
  completion = '',
  onAccept,
  
  // Basic props
  placeholder = '',
  rows = 5,
  disabled = false,
  readOnly = false,
  required = false,
  name,
  id,
  autoFocus = false,
  maxLength,
  minLength,
  
  // Styling props - className
  className = '',
  inputClassName = '',
  completionClassName = '',
  overlayClassName = '',
  
  // Styling props - inline styles
  style,
  inputStyle,
  completionStyle,
  
  // Quick customization
  completionColor,
  theme,
  
  // Control default styles
  unstyled = false,
  
  // Event handlers
  onFocus,
  onBlur,
  onKeyDown: externalKeyDown,
  onKeyUp,
  onScroll: externalScroll,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [completionOpacity, setCompletionOpacity] = React.useState(1);
  const acceptTimeoutRef = useRef<number | null>(null);
  
  // Keep overlay scroll in perfect sync with textarea
  useLayoutEffect(() => {
    if (textareaRef.current && overlayRef.current) {
      // Sync immediately before browser paint
      overlayRef.current.scrollTop = textareaRef.current.scrollTop;
      overlayRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  }, [value, completion]);
  
  // Reset completion opacity when completion changes
  useEffect(() => {
    if (completion) {
      setCompletionOpacity(1);
    }
  }, [completion]);
  
  /**
   * Handle keyboard events - Accept completion on Tab key
   */
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Call external handler first
    if (externalKeyDown) {
      externalKeyDown(e);
      if (e.defaultPrevented) return;
    }
    
    // Accept suggestion on Tab key - smooth fade then accept
    if (completion && e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      
      // Start fade out
      setCompletionOpacity(0);
      
      // Clear any existing timeout
      if (acceptTimeoutRef.current) {
        clearTimeout(acceptTimeoutRef.current);
      }
      
      // Accept after fade completes (150ms)
      acceptTimeoutRef.current = window.setTimeout(() => {
        const newValue = value + completion;
        onChange(newValue);
        if (onAccept) onAccept(newValue);
      }, 150);
    }
  }, [completion, value, onChange, onAccept, externalKeyDown]);
  
  /**
   * Sync scroll between textarea and overlay for multi-line support
   */
  const handleScroll = useCallback((e: React.UIEvent<HTMLTextAreaElement>) => {
    // Call external handler first
    if (externalScroll) {
      externalScroll(e);
    }
    
    // Directly sync overlay scroll - no state updates for performance
    if (overlayRef.current) {
      overlayRef.current.scrollTop = e.currentTarget.scrollTop;
      overlayRef.current.scrollLeft = e.currentTarget.scrollLeft;
    }
  }, [externalScroll]);
  
  /**
   * Handle text change
   */
  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  }, [onChange]);
  
  // Build class names (merge base + user classes)
  const containerClasses = unstyled 
    ? className 
    : `${styles.container} ${className}`.trim();
    
  const inputClasses = unstyled 
    ? inputClassName 
    : `${styles.input} ${inputClassName}`.trim();
    
  const overlayClasses = unstyled 
    ? overlayClassName 
    : `${styles.overlay} ${overlayClassName}`.trim();
    
  const typedClasses = unstyled 
    ? '' 
    : styles.typed;
    
  const completionClasses = unstyled 
    ? completionClassName 
    : `${styles.completion} ${completionClassName}`.trim();
  
  // Build inline styles with theme support
  const finalCompletionStyle: CSSProperties = {
    ...(completionColor && { color: completionColor }),
    ...(theme?.completionColor && { color: theme.completionColor }),
    ...(theme?.completionOpacity !== undefined && { opacity: theme.completionOpacity }),
    ...completionStyle,
  };
  
  const finalContainerStyle: CSSProperties = {
    ...(theme?.backgroundColor && { backgroundColor: theme.backgroundColor }),
    ...(theme?.borderColor && { borderColor: theme.borderColor }),
    ...(theme?.borderRadius && { borderRadius: theme.borderRadius }),
    ...style,
  };
  
  const finalInputStyle: CSSProperties = {
    ...(theme?.fontSize && { fontSize: theme.fontSize }),
    ...(theme?.fontFamily && { fontFamily: theme.fontFamily }),
    ...(theme?.lineHeight && { lineHeight: theme.lineHeight }),
    ...(theme?.padding && { padding: theme.padding }),
    ...(theme?.textColor && { color: theme.textColor }),
    ...inputStyle,
  };
  
  // Overlay MUST match input font properties exactly for alignment
  const finalOverlayStyle: CSSProperties = {
    fontSize: finalInputStyle.fontSize || theme?.fontSize,
    fontFamily: finalInputStyle.fontFamily || theme?.fontFamily,
    lineHeight: finalInputStyle.lineHeight || theme?.lineHeight,
    padding: finalInputStyle.padding || theme?.padding,
    letterSpacing: finalInputStyle.letterSpacing,
    wordSpacing: finalInputStyle.wordSpacing,
  };
  
  return (
    <div 
      className={containerClasses}
      style={finalContainerStyle}
      data-smart-autocomplete
    >
      {/* Overlay layer - shows typed text (hidden) + completion (gray) */}
      <div 
        ref={overlayRef}
        className={overlayClasses}
        style={finalOverlayStyle}
        aria-hidden="true"
      >
        {/* Typed text - transparent/hidden */}
        <span className={typedClasses}>{value}</span>{/* Completion text - visible in gray */}{completion && (
          <span 
            className={completionClasses}
            style={{
              ...finalCompletionStyle,
              opacity: completionOpacity
            }}
          >{completion}</span>
        )}
      </div>
      
      {/* Input textarea - actual user input */}
      <textarea
        ref={textareaRef}
        className={inputClasses}
        style={finalInputStyle}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyUp={onKeyUp}
        onScroll={handleScroll}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        name={name}
        id={id}
        autoFocus={autoFocus}
        maxLength={maxLength}
        minLength={minLength}
        spellCheck={false}
        aria-label={placeholder || 'Smart autocomplete input'}
        aria-autocomplete="inline"
        aria-describedby={completion ? 'autocomplete-hint' : undefined}
      />
      
      {/* Hidden hint for screen readers */}
      {completion && (
        <span 
          id="autocomplete-hint" 
          style={{ 
            position: 'absolute', 
            left: '-10000px', 
            width: '1px', 
            height: '1px', 
            overflow: 'hidden' 
          }}
        >
          Suggestion available: {completion}. Press Tab to accept.
        </span>
      )}
    </div>
  );
};

// Memoize component to prevent unnecessary re-renders
export default React.memo(SmartAutocomplete);
