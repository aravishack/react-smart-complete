import * as React from 'react';
import { useState, useEffect } from 'react';
import SmartAutocomplete from '../../src';

function BasicExample() {
  const [text, setText] = useState('');
  const [completion, setCompletion] = useState('');

  // Simple completion logic (case-insensitive)
  useEffect(() => {
    const lowerText = text.toLowerCase();
    if (lowerText.endsWith('hello')) {
      setCompletion(' there!');
    } else if (lowerText.endsWith('how are')) {
      setCompletion(' you?');
    } else if (lowerText.endsWith('good')) {
      setCompletion(' morning!');
    } else {
      setCompletion('');
    }
  }, [text]);

  const handleAccept = (value: string) => {
    console.log('Accepted:', value);
  };

  return (
    <div className="example">
      <h2>🚀 Basic Usage</h2>
      <p>
        Try typing <code>"Hello"</code>, <code>"How are"</code>, or <code>"Good"</code> 
        and watch the gray suggestion appear. Press <kbd>Tab</kbd> to accept it.
      </p>

      <div className="example-section">
        <h3>Interactive Demo</h3>
        <SmartAutocomplete
          value={text}
          onChange={setText}
          completion={completion}
          onAccept={handleAccept}
          placeholder="Start typing..."
          rows={6}
        />
        <div style={{ marginTop: '10px', padding: '10px', background: '#e7f5ff', borderRadius: '6px', fontSize: '14px' }}>
          <strong>💡 Try typing:</strong> "Hello", "How are", or "Good"
        </div>

        <div className="output">
          <h4>Current State:</h4>
          <pre>{JSON.stringify({ text, completion }, null, 2)}</pre>
        </div>
      </div>

      <div className="example-section">
        <div className="description">
          <h4>How it works:</h4>
          <p>
            1. Parent component manages the <code>text</code> state<br />
            2. Parent calculates <code>completion</code> based on text<br />
            3. Component displays completion in gray<br />
            4. User presses <kbd>Tab</kbd> to accept
          </p>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
