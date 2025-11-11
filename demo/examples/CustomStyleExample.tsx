import * as React from 'react';
import { useState } from 'react';
import SmartAutocomplete from '../../src';

function CustomStyleExample() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');

  const getCompletion = (text: string) => {
    const lowerText = text.toLowerCase();
    if (lowerText.endsWith('hello')) return ' world!';
    if (lowerText.endsWith('react')) return ' is awesome';
    if (lowerText.endsWith('code')) return ' with style';
    return '';
  };

  const completion1 = getCompletion(text1);
  const completion2 = getCompletion(text2);
  const completion3 = getCompletion(text3);
  const completion4 = getCompletion(text4);

  return (
    <div className="example">
      <h2>🎨 Custom Styling</h2>
      <p>
        The component is highly customizable. Here are examples showing different
        styling approaches including custom colors, fonts, and themes.
      </p>

      {/* Example 1: Inline Styles */}
      <div className="example-section">
        <h3>1. Inline Styles</h3>
        <div className="description">
          <strong>Props used:</strong>
          <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px', fontSize: '12px', overflow: 'auto' }}>{`style={{
  backgroundColor: '#faf5ff',
  border: '2px solid #8b5cf6',
  borderRadius: '12px',
}}
inputStyle={{
  fontSize: '16px',
  padding: '16px',
}}
completionStyle={{
  color: '#a78bfa',
}}`}</pre>
        </div>
        <SmartAutocomplete
          value={text1}
          onChange={setText1}
          completion={completion1}
          placeholder="Purple theme with custom font..."
          rows={4}
          style={{
            backgroundColor: '#faf5ff',
            border: '2px solid #8b5cf6',
            borderRadius: '12px',
          }}
          inputStyle={{
            fontSize: '16px',
            padding: '16px',
          }}
          completionStyle={{
            color: '#a78bfa',
          }}
        />
        <div style={{ marginTop: '8px', padding: '8px', background: '#fef3c7', borderRadius: '4px', fontSize: '13px' }}>
          💡 Try: "Hello", "React", or "Code"
        </div>
      </div>

      {/* Example 2: Quick Props */}
      <div className="example-section">
        <h3>2. Quick Customization Props</h3>
        <div className="description">
          <strong>Props used:</strong>
          <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>{`completionColor="#ff6b6b"`}</pre>
        </div>
        <SmartAutocomplete
          value={text2}
          onChange={setText2}
          completion={completion2}
          placeholder="Custom completion color..."
          rows={4}
          completionColor="#ff6b6b"
        />
      </div>

      {/* Example 3: Theme Object */}
      <div className="example-section">
        <h3>3. Theme Object</h3>
        <div className="description">
          <strong>Props used:</strong>
          <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px', fontSize: '12px', overflow: 'auto' }}>{`theme={{
  completionColor: '#6b7280',
  textColor: '#f3f4f6',
  backgroundColor: '#1f2937',
  borderColor: '#374151',
  borderRadius: '8px',
  padding: '12px',
  fontSize: '15px',
}}`}</pre>
        </div>
        <SmartAutocomplete
          value={text3}
          onChange={setText3}
          completion={completion3}
          placeholder="Dark theme..."
          rows={4}
          theme={{
            completionColor: '#6b7280',
            textColor: '#f3f4f6',
            backgroundColor: '#1f2937',
            borderColor: '#374151',
            borderRadius: '8px',
            padding: '12px',
            fontSize: '15px',
          }}
        />
      </div>

      {/* Example 4: CSS Classes (Tailwind-like) */}
      <div className="example-section">
        <h3>4. Custom CSS Classes</h3>
        <div className="description">
          <strong>Props used:</strong>
          <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>{`className="custom-container"
inputClassName="custom-input"
overlayClassName="custom-overlay"
completionClassName="custom-completion"`}</pre>
        </div>
        <SmartAutocomplete
          value={text4}
          onChange={setText4}
          completion={completion4}
          placeholder="Custom classes..."
          rows={4}
          className="custom-container"
          inputClassName="custom-input"
          overlayClassName="custom-overlay"
          completionClassName="custom-completion"
        />
        <style>{`
          .custom-container {
            border: 2px solid #10b981 !important;
            border-radius: 16px !important;
            background: linear-gradient(to right, #ecfdf5, #d1fae5) !important;
          }
          .custom-container:has(.custom-input:focus) {
            border-color: #059669 !important;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1) !important;
          }
          .custom-input {
            padding: 16px !important;
            font-size: 16px !important;
          }
          .custom-overlay {
            padding: 16px !important;
            font-size: 16px !important;
          }
          .custom-completion {
            color: #059669 !important;
          }
        `}</style>
      </div>

      <div className="example-section">
        <div className="description">
          <h4>💡 Styling Options:</h4>
          <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
            <li><strong>Inline styles:</strong> <code>inputStyle</code>, <code>completionStyle</code></li>
            <li><strong>Quick props:</strong> <code>completionColor</code></li>
            <li><strong>Theme object:</strong> <code>theme</code> prop</li>
            <li><strong>CSS classes:</strong> <code>className</code>, <code>inputClassName</code></li>
            <li><strong>Unstyled mode:</strong> <code>unstyled</code> prop for full control</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            <strong>Works with:</strong> Tailwind CSS, styled-components, Emotion, CSS Modules, and more!
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomStyleExample;
