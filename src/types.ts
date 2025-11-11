import { CSSProperties } from 'react';

/**
 * Theme object for customizing the autocomplete appearance
 */
export interface SmartAutocompleteTheme {
  /** Color of the completion text */
  completionColor?: string;
  /** Opacity of the completion text */
  completionOpacity?: number;
  /** Color of the typed text */
  textColor?: string;
  /** Background color */
  backgroundColor?: string;
  /** Border color */
  borderColor?: string;
  /** Border radius */
  borderRadius?: string;
  /** Padding */
  padding?: string;
  /** Font size */
  fontSize?: string;
  /** Font family */
  fontFamily?: string;
  /** Line height */
  lineHeight?: string;
}

/**
 * Props for the SmartAutocomplete component
 */
export interface SmartAutocompleteProps {
  // Core props
  /** Current text value */
  value: string;
  /** Callback when text changes */
  onChange: (value: string) => void;
  /** Suggestion text to display in gray after the cursor */
  completion?: string;
  /** Callback when user accepts the suggestion (Tab key) */
  onAccept?: (value: string) => void;
  
  // Basic props
  /** Placeholder text */
  placeholder?: string;
  /** Number of textarea rows */
  rows?: number;
  /** Disable the input */
  disabled?: boolean;
  /** Make the textarea readonly */
  readOnly?: boolean;
  /** Required field */
  required?: boolean;
  /** Name attribute for forms */
  name?: string;
  /** ID attribute */
  id?: string;
  /** Auto focus on mount */
  autoFocus?: boolean;
  /** Max length */
  maxLength?: number;
  /** Min length */
  minLength?: number;
  
  // Styling props - ClassName approach
  /** Container CSS class */
  className?: string;
  /** Input/textarea CSS class */
  inputClassName?: string;
  /** Completion text CSS class */
  completionClassName?: string;
  /** Overlay container CSS class */
  overlayClassName?: string;
  
  // Styling props - Style object approach
  /** Inline container styles */
  style?: CSSProperties;
  /** Inline input styles */
  inputStyle?: CSSProperties;
  /** Inline completion text styles */
  completionStyle?: CSSProperties;
  
  // Quick customization
  /** Color of suggestion text (shortcut) */
  completionColor?: string;
  /** Theme object for comprehensive styling */
  theme?: SmartAutocompleteTheme;
  
  // Control default styles
  /** Disable all default styles (for full custom styling) */
  unstyled?: boolean;
  
  // Event handlers
  /** Callback when input receives focus */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** Callback when input loses focus */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** Callback on key down */
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  /** Callback on key up */
  onKeyUp?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  /** Callback on scroll */
  onScroll?: (e: React.UIEvent<HTMLTextAreaElement>) => void;
}
