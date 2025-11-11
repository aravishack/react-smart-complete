import * as React from 'react';
import { useState, useEffect } from 'react';
import SmartAutocomplete from '../../src';

// Define common phrase completions
const completions: Record<string, string> = {
  'Thank you': ' for your time',
  'Thanks': ' for reaching out',
  'Looking forward': ' to hearing from you',
  'Let me': ' know if you have any questions',
  'Let me know': ' if you need anything else',
  'Please': ' feel free to reach out',
  'Please let me': ' know',
  'I hope': ' this helps',
  'I would': ' appreciate your feedback',
  'Feel free': ' to contact me',
  'See you': ' soon',
  'Talk to you': ' later',
  'Best': ' regards',
  'Kind': ' regards',
  'Have a': ' great day',
  'Take': ' care',
  'Hope to': ' hear from you soon',
  'Looking': ' forward to working with you',
};

function PatternExample() {
  const [text, setText] = useState('');
  const [completion, setCompletion] = useState('');
  const [matchedPattern, setMatchedPattern] = useState<string | null>(null);

  useEffect(() => {
    // Find matching pattern (case-insensitive)
    const lowerText = text.toLowerCase();
    for (const [pattern, complete] of Object.entries(completions)) {
      if (lowerText.endsWith(pattern.toLowerCase())) {
        setCompletion(complete);
        setMatchedPattern(pattern);
        return;
      }
    }
    setCompletion('');
    setMatchedPattern(null);
  }, [text]);

  return (
    <div className="example">
      <h2>🎯 Pattern Matching</h2>
      <p>
        This example demonstrates pattern-based completions. Try typing any of the
        phrases from the list below to see the suggestion.
      </p>

      <div className="example-section">
        <h3>Interactive Demo</h3>
        <SmartAutocomplete
          value={text}
          onChange={setText}
          completion={completion}
          placeholder="Try typing: 'Thank you', 'Looking forward', 'Let me'..."
          rows={8}
        />
        <div style={{ marginTop: '10px', padding: '10px', background: '#e7f5ff', borderRadius: '6px', fontSize: '14px' }}>
          <strong>💡 Try typing:</strong> "Let me know", "Thank you", "Looking forward", "Please", "Best", etc.
        </div>

        {matchedPattern && (
          <div className="output" style={{ marginTop: '15px', background: '#e7f5ff', borderColor: '#339af0' }}>
            <h4>✓ Pattern Matched:</h4>
            <pre>{`"${matchedPattern}" → "${completion}"`}</pre>
          </div>
        )}
      </div>

      <div className="example-section">
        <h3>Available Patterns</h3>
        <div className="description">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #667eea' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Type this...</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Get this completion</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(completions).map(([pattern, complete]) => (
                <tr key={pattern} style={{ borderBottom: '1px solid #e9ecef' }}>
                  <td style={{ padding: '8px', fontFamily: 'monospace' }}>"{pattern}"</td>
                  <td style={{ padding: '8px', color: '#667eea' }}>"{complete}"</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="example-section">
        <div className="description">
          <h4>💡 Use Cases:</h4>
          <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
            <li>Email templates</li>
            <li>Customer support responses</li>
            <li>Common phrases in chat applications</li>
            <li>Code snippets in IDEs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PatternExample;
