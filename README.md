# react-smart-complete

<div align="center">

[![npm version](https://img.shields.io/npm/v/react-smart-complete.svg)](https://www.npmjs.com/package/react-smart-complete)
[![npm downloads](https://img.shields.io/npm/dm/react-smart-complete.svg)](https://www.npmjs.com/package/react-smart-complete)
[![license](https://img.shields.io/npm/l/react-smart-complete.svg)](https://github.com/aravishack/react-smart-complete/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

**Gmail-style inline autocomplete component for React**

[Demo](https://aravishack.github.io/react-smart-complete) · [Report Bug](https://github.com/aravishack/react-smart-complete/issues) · [Request Feature](https://github.com/aravishack/react-smart-complete/issues)

</div>

---

## ✨ Features

- 🎯 **Gmail-style inline completion** - Shows gray suggestion text after cursor
- ⌨️ **Tab to accept** - Press Tab for instant, responsive acceptance
- 🎨 **Fully customizable** - Works with Tailwind, styled-components, or any CSS framework
- 📱 **Responsive** - Works on desktop and mobile
- ♿ **Accessible** - ARIA labels and keyboard navigation
- 🔒 **TypeScript** - Full type safety included
- 📦 **Lightweight** - No dependencies (except React)
- 🚀 **Fast** - Optimized performance with minimal re-renders
- 🎭 **Unstyled mode** - Complete control over styling
- ⚡ **Instant response** - Zero delay acceptance for maximum responsiveness

---

## 📦 Installation

```bash
npm install react-smart-complete
```

or

```bash
yarn add react-smart-complete
```

or

```bash
pnpm add react-smart-complete
```

---

## 🚀 Quick Start

### Basic Usage

```tsx
import { useState, useEffect } from 'react';
import SmartAutocomplete from 'react-smart-complete';
import 'react-smart-complete/dist/style.css';

function App() {
  const [text, setText] = useState('');
  const [completion, setCompletion] = useState('');
  
  // Your logic to generate completions (case-insensitive)
  useEffect(() => {
    const lowerText = text.toLowerCase();
    if (lowerText.endsWith('hello')) {
      setCompletion(' world!');
    } else if (lowerText.endsWith('how are')) {
      setCompletion(' you?');
    } else if (lowerText.endsWith('good')) {
      setCompletion(' morning!');
    } else {
      setCompletion('');
    }
  }, [text]);
  
  return (
    <SmartAutocomplete
      value={text}
      onChange={setText}
      completion={completion}
      placeholder="Start typing..."
    />
  );
}
```

**That's it!** The component handles all the UI and keyboard interactions.

- Press **Tab** to accept suggestions instantly
- Completions work regardless of text casing
- Gray suggestion text appears inline as you type

---

## 📖 API Reference

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `string` | ✅ Yes | - | Current text value |
| `onChange` | `(value: string) => void` | ✅ Yes | - | Callback when text changes |
| `completion` | `string` | ❌ No | `''` | Suggestion text to display (gray) |
| `onAccept` | `(value: string) => void` | ❌ No | - | Callback when Tab is pressed |
| `placeholder` | `string` | ❌ No | `''` | Placeholder text |
| `rows` | `number` | ❌ No | `5` | Number of textarea rows |
| `disabled` | `boolean` | ❌ No | `false` | Disable the input |
| `className` | `string` | ❌ No | `''` | Container CSS class |
| `inputClassName` | `string` | ❌ No | `''` | Input/textarea CSS class |
| `completionClassName` | `string` | ❌ No | `''` | Completion text CSS class |
| `overlayClassName` | `string` | ❌ No | `''` | Overlay container CSS class |
| `style` | `CSSProperties` | ❌ No | - | Inline container styles |
| `inputStyle` | `CSSProperties` | ❌ No | - | Inline input styles |
| `completionStyle` | `CSSProperties` | ❌ No | - | Inline completion styles |
| `completionColor` | `string` | ❌ No | `'#999'` | Color of suggestion text |
| `unstyled` | `boolean` | ❌ No | `false` | Disable all default styles |

---

## 🎨 Styling

### Works with ANY CSS Framework

`react-smart-complete` is designed to work seamlessly with any styling solution:

<details>
<summary><b>Tailwind CSS</b></summary>

```tsx
<SmartAutocomplete
  value={text}
  onChange={setText}
  completion={completion}
  className="max-w-2xl mx-auto"
  inputClassName="w-full px-4 py-3 text-base font-sans rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white"
  completionClassName="text-gray-400 italic"
/>
```

**Unstyled mode (full Tailwind control):**
```tsx
<SmartAutocomplete
  unstyled
  value={text}
  onChange={setText}
  completion={completion}
  className="relative w-full"
  inputClassName="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
  overlayClassName="absolute inset-0 pointer-events-none whitespace-pre-wrap"
  completionClassName="text-slate-400 select-none"
/>
```

</details>

<details>
<summary><b>styled-components</b></summary>

```tsx
import styled from 'styled-components';
import SmartAutocomplete from 'react-smart-complete';

const StyledAutocomplete = styled(SmartAutocomplete)`
  max-width: 600px;
  margin: 20px auto;
`;

function App() {
  return (
    <StyledAutocomplete
      value={text}
      onChange={setText}
      completion={completion}
      inputStyle={{
        padding: '16px',
        fontSize: '16px',
        border: '2px solid #e2e8f0',
        borderRadius: '12px',
      }}
      completionStyle={{ color: '#8b5cf6' }}
    />
  );
}
```

</details>

<details>
<summary><b>CSS Modules</b></summary>

```tsx
import SmartAutocomplete from 'react-smart-complete';
import styles from './MyComponent.module.css';

function App() {
  return (
    <SmartAutocomplete
      value={text}
      onChange={setText}
      completion={completion}
      className={styles.container}
      inputClassName={styles.input}
      completionClassName={styles.completion}
    />
  );
}
```

```css
/* MyComponent.module.css */
.container {
  max-width: 800px;
  margin: 2rem auto;
}

.input {
  width: 100%;
  padding: 1rem;
  font-size: 1.125rem;
  border: 2px solid #cbd5e1;
  border-radius: 0.5rem;
}

.completion {
  color: #64748b;
  font-style: italic;
}
```

</details>

<details>
<summary><b>Emotion</b></summary>

```tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SmartAutocomplete from 'react-smart-complete';

const inputStyle = css`
  width: 100%;
  padding: 14px 18px;
  font-size: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

function App() {
  return (
    <SmartAutocomplete
      unstyled
      inputClassName={inputStyle}
      value={text}
      onChange={setText}
      completion={completion}
    />
  );
}
```

</details>

<details>
<summary><b>Plain CSS</b></summary>

```tsx
import SmartAutocomplete from 'react-smart-complete';
import './app.css';

function App() {
  return (
    <SmartAutocomplete
      value={text}
      onChange={setText}
      completion={completion}
      className="custom-autocomplete"
      inputClassName="custom-input"
      completionClassName="custom-suggestion"
    />
  );
}
```

```css
/* app.css */
.custom-autocomplete {
  max-width: 600px;
}

.custom-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.custom-input:focus {
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.custom-suggestion {
  color: #999;
}
```

</details>

### Inline Styles

```tsx
<SmartAutocomplete
  value={text}
  onChange={setText}
  completion={completion}
  style={{ maxWidth: '600px', margin: '0 auto' }}
  inputStyle={{
    fontSize: '16px',
    padding: '15px',
    borderRadius: '8px',
    border: '2px solid #007bff',
  }}
  completionStyle={{
    color: '#6c757d',
    fontStyle: 'italic',
  }}
/>
```

### Quick Customization

```tsx
<SmartAutocomplete
  value={text}
  onChange={setText}
  completion={completion}
  completionColor="#8b5cf6"
/>
```

---

## ⚠️ Common Pitfalls & Best Practices

### 🎯 Critical: Font Property Alignment

**The input and completion text MUST have identical font properties for perfect alignment.**

#### ✅ Correct: Only change color

```tsx
<SmartAutocomplete
  value={text}
  onChange={setText}
  completion={completion}
  inputStyle={{
    fontSize: '16px',
    fontFamily: 'Arial',
    padding: '12px',
  }}
  completionStyle={{
    color: '#999',  // ✓ Only visual difference
  }}
/>
```

#### ❌ Wrong: Different font properties cause misalignment

```tsx
<SmartAutocomplete
  completionStyle={{
    fontWeight: 'bold',     // ❌ Don't do this!
    fontStyle: 'italic',    // ❌ Don't do this!
    fontSize: '18px',       // ❌ Don't do this!
  }}
/>
```

### 📐 Properties That MUST Match

| Property | Must Match | Can Differ |
|----------|------------|------------|
| `fontSize` | ✅ Yes | ❌ No |
| `fontFamily` | ✅ Yes | ❌ No |
| `fontWeight` | ✅ Yes | ❌ No |
| `fontStyle` | ✅ Yes | ❌ No |
| `letterSpacing` | ✅ Yes | ❌ No |
| `lineHeight` | ✅ Yes | ❌ No |
| `padding` | ✅ Yes | ❌ No |
| `color` | ❌ No | ✅ Yes |
| `opacity` | ❌ No | ✅ Yes |
| `textDecoration` | ❌ No | ✅ Yes |

### 🎨 Using CSS Classes? Use `overlayClassName`!

**When using CSS classes, font properties aren't automatically inherited. You MUST apply them to both input AND overlay.**

#### ✅ Correct: Apply font styles to both

```tsx
<SmartAutocomplete
  className="custom-container"
  inputClassName="custom-input"
  overlayClassName="custom-overlay"  // ← Important!
  completionClassName="custom-completion"
/>

<style>
  .custom-input {
    font-size: 16px;
    padding: 16px;
  }
  
  .custom-overlay {
    font-size: 16px;  /* ← Must match input */
    padding: 16px;    /* ← Must match input */
  }
  
  .custom-completion {
    color: #059669;   /* ← Only visual styles */
  }
</style>
```

#### ❌ Wrong: Missing overlayClassName

```tsx
<SmartAutocomplete
  inputClassName="custom-input"  // Has fontSize: 16px
  completionClassName="custom-completion"  // ❌ Won't align!
/>
```

### 🎨 Container vs Input Styling

**Background, border, and borderRadius go on the CONTAINER, not the input.**

#### ✅ Correct: Container styles

```tsx
<SmartAutocomplete
  style={{
    backgroundColor: '#faf5ff',  // ← Container
    border: '2px solid purple',   // ← Container
    borderRadius: '12px',         // ← Container
  }}
  inputStyle={{
    fontSize: '16px',             // ← Input/text only
    padding: '16px',              // ← Input/text only
  }}
/>
```

#### ❌ Wrong: Styles on wrong element

```tsx
<SmartAutocomplete
  inputStyle={{
    backgroundColor: 'white',  // ❌ Won't work!
    border: '1px solid',       // ❌ Won't work!
  }}
/>
```

### 🔤 Case-Insensitive Matching

**Always convert to lowercase when matching patterns.**

#### ✅ Correct: Case-insensitive

```tsx
const getCompletion = (text: string) => {
  const lowerText = text.toLowerCase();  // ← Important!
  if (lowerText.endsWith('hello')) return ' world';
  if (lowerText.endsWith('thank you')) return ' for your time';
  return '';
};
```

#### ❌ Wrong: Case-sensitive

```tsx
const getCompletion = (text: string) => {
  if (text.endsWith('Hello')) return ' world';  // Only works for "Hello"
  return '';
};
```

---

## 💡 Examples

### Example 1: Pattern Matching (Case-Insensitive)

```tsx
import { useState, useEffect } from 'react';
import SmartAutocomplete from 'react-smart-complete';

// Define common phrase completions
const completions: Record<string, string> = {
  'Thank you': ' for your time',
  'Thanks': ' for reaching out',
  'Looking forward': ' to hearing from you',
  'Let me': ' know if you have any questions',
  'Let me know': ' if you need anything else',
  'Please': ' feel free to reach out',
  'I hope': ' this helps',
  'Best': ' regards',
  'Kind': ' regards',
};

function PatternExample() {
  const [text, setText] = useState('');
  const [completion, setCompletion] = useState('');
  
  useEffect(() => {
    // Case-insensitive matching
    const lowerText = text.toLowerCase();
    
    for (const [pattern, complete] of Object.entries(completions)) {
      if (lowerText.endsWith(pattern.toLowerCase())) {
        setCompletion(complete);
        return;
      }
    }
    setCompletion('');
  }, [text]);
  
  return (
    <SmartAutocomplete
      value={text}
      onChange={setText}
      completion={completion}
      placeholder="Try: 'Thank you', 'Let me know', 'Looking forward'..."
      rows={6}
    />
  );
}
```

### Example 2: API-based Suggestions

```tsx
import { useState, useEffect } from 'react';
import SmartAutocomplete from 'react-smart-complete';

function APIExample() {
  const [text, setText] = useState('');
  const [completion, setCompletion] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (text.length > 10) {
        try {
          const response = await fetch('/api/complete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
          });
          const data = await response.json();
          setCompletion(data.completion);
        } catch (error) {
          console.error('Failed to fetch completion:', error);
        }
      } else {
        setCompletion('');
      }
    }, 300); // Debounce
    
    return () => clearTimeout(timer);
  }, [text]);
  
  const handleAccept = (value) => {
    console.log('Accepted:', value);
    // Track analytics, etc.
  };
  
  return (
    <SmartAutocomplete
      value={text}
      onChange={setText}
      completion={completion}
      onAccept={handleAccept}
      placeholder="Start typing..."
    />
  );
}
```

### Example 3: Email Composer

```tsx
import { useState, useEffect } from 'react';
import SmartAutocomplete from 'react-smart-complete';

const emailTemplates = [
  { trigger: 'Hi', completion: ' there,\n\nI hope this email finds you well.' },
  { trigger: 'Thanks', completion: ' for your time and consideration.' },
  { trigger: 'Best', completion: ' regards,\naravishack' },
  { trigger: 'Looking forward', completion: ' to hearing from you soon.' },
];

function EmailComposer() {
  const [text, setText] = useState('');
  const [completion, setCompletion] = useState('');
  
  useEffect(() => {
    const lastLine = text.split('\n').pop() || '';
    
    for (const template of emailTemplates) {
      if (lastLine.endsWith(template.trigger)) {
        setCompletion(template.completion);
        return;
      }
    }
    setCompletion('');
  }, [text]);
  
  return (
    <div className="email-composer">
      <input 
        type="text" 
        placeholder="To:"
        className="email-to"
      />
      <input 
        type="text" 
        placeholder="Subject:"
        className="email-subject"
      />
      <SmartAutocomplete
        value={text}
        onChange={setText}
        completion={completion}
        placeholder="Compose your email..."
        rows={15}
        className="email-body"
      />
    </div>
  );
}
```

### Example 4: Code Editor with Suggestions

```tsx
import { useState, useEffect } from 'react';
import SmartAutocomplete from 'react-smart-complete';

const codeCompletions = {
  'console.': 'log()',
  'function ': 'myFunction() {\n  \n}',
  'if (': ') {\n  \n}',
  'for (': 'let i = 0; i < length; i++) {\n  \n}',
};

function CodeEditor() {
  const [code, setCode] = useState('');
  const [completion, setCompletion] = useState('');
  
  useEffect(() => {
    for (const [trigger, complete] of Object.entries(codeCompletions)) {
      if (code.endsWith(trigger)) {
        setCompletion(complete);
        return;
      }
    }
    setCompletion('');
  }, [code]);
  
  return (
    <SmartAutocomplete
      value={code}
      onChange={setCode}
      completion={completion}
      placeholder="// Start coding..."
      rows={20}
      className="code-editor"
      inputClassName="font-mono text-sm"
      completionClassName="text-green-500 opacity-70"
    />
  );
}
```

---

## 🔧 Advanced Usage

### Custom Hook for Logic Separation

```tsx
// useSmartCompletion.ts
import { useState, useEffect } from 'react';

export function useSmartCompletion(text: string) {
  const [completion, setCompletion] = useState('');
  
  useEffect(() => {
    // Your completion logic here
    const timer = setTimeout(() => {
      const result = getCompletion(text);
      setCompletion(result);
    }, 150);
    
    return () => clearTimeout(timer);
  }, [text]);
  
  return completion;
}

// Usage
function App() {
  const [text, setText] = useState('');
  const completion = useSmartCompletion(text);
  
  return (
    <SmartAutocomplete
      value={text}
      onChange={setText}
      completion={completion}
    />
  );
}
```

### With Form Integration

```tsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [completion, setCompletion] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Name"
      />
      
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
      />
      
      <SmartAutocomplete
        value={formData.message}
        onChange={(value) => setFormData({ ...formData, message: value })}
        completion={completion}
        placeholder="Your message..."
        rows={8}
      />
      
      <button type="submit">Send</button>
    </form>
  );
}
```

### Multi-language Support

```tsx
const completionsByLanguage = {
  en: {
    'Hello': ' there!',
    'Thank you': ' for your time',
  },
  es: {
    'Hola': ', ¿cómo estás?',
    'Gracias': ' por tu tiempo',
  },
  fr: {
    'Bonjour': ', comment allez-vous?',
    'Merci': ' pour votre temps',
  },
};

function MultiLanguageExample() {
  const [text, setText] = useState('');
  const [completion, setCompletion] = useState('');
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    const completions = completionsByLanguage[language];
    for (const [pattern, complete] of Object.entries(completions)) {
      if (text.endsWith(pattern)) {
        setCompletion(complete);
        return;
      }
    }
    setCompletion('');
  }, [text, language]);
  
  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
      
      <SmartAutocomplete
        value={text}
        onChange={setText}
        completion={completion}
      />
    </div>
  );
}
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Tab` | Accept suggestion |
| `Escape` | Clear suggestion (if implemented in parent) |
| `Arrow keys` | Normal text navigation |

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📱 Mobile Support

The component works on mobile devices with touch input. The suggestion is displayed inline and can be accepted by tapping a custom accept button (implement in your UI).

---

## ♿ Accessibility

The component includes proper ARIA attributes:
- `aria-autocomplete="inline"`
- `aria-label` for screen readers
- Keyboard navigation support
- Focus management

---

## 🎯 TypeScript Support

Full TypeScript support with comprehensive type definitions:

```typescript
import SmartAutocomplete, { SmartAutocompleteProps } from 'react-smart-complete';

const MyComponent: React.FC = () => {
  const props: SmartAutocompleteProps = {
    value: '',
    onChange: (value: string) => console.log(value),
    completion: 'suggestion',
  };
  
  return <SmartAutocomplete {...props} />;
};
```

---

## 📦 Bundle Size

- **Minified**: ~8 KB
- **Minified + Gzipped**: ~3 KB
- **Zero dependencies** (except React peer dependency)

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/aravishack/react-smart-complete.git
cd react-smart-complete

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build library
npm run build
```

---

## 📄 License

MIT © [aravishack](https://github.com/aravishack)

---

## 🙏 Acknowledgments

Inspired by:
- Gmail's Smart Compose feature
- GitHub Copilot
- VS Code IntelliSense

---

## 📞 Support

- 📖 [Documentation](https://aravishack.github.io/react-smart-complete)
- 🐛 [Report Issues](https://github.com/aravishack/react-smart-complete/issues)
- 💬 [Discussions](https://github.com/aravishack/react-smart-complete/discussions)
- 🐦 [Twitter](https://twitter.com/aravishack)

---

<div align="center">

**Made with ❤️ by [aravishack](https://github.com/aravishack)**

If you find this useful, please ⭐ star the repo!

</div>
