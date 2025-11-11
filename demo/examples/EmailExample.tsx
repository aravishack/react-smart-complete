import * as React from 'react';
import { useState, useEffect } from 'react';
import SmartAutocomplete from '../../src';

// Email templates
const emailTemplates: Record<string, string> = {
  'Hi': ' there,\n\nI hope this email finds you well.',
  'Hello': ' team,\n\nI wanted to reach out regarding',
  'Dear': ' [Name],\n\nThank you for your message.',
  'Thanks': ' for reaching out.\n\nI appreciate your interest in',
  'Following up': ' on our previous conversation',
  'Just wanted': ' to check in and see how things are going',
  'I am writing': ' to inform you about',
  'Please let me know': ' if you have any questions or concerns.',
  'Looking forward to': ' hearing from you soon.',
  'Best regards': ',\n[Your Name]',
  'Sincerely': ',\n[Your Name]\n[Your Title]',
};

function EmailExample() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [completion, setCompletion] = useState('');

  useEffect(() => {
    // Get the last line or phrase
    const lines = body.split('\n');
    const lastLine = lines[lines.length - 1];
    const lowerLastLine = lastLine.toLowerCase();

    // Check for template matches (case-insensitive)
    for (const [trigger, template] of Object.entries(emailTemplates)) {
      if (lowerLastLine.endsWith(trigger.toLowerCase())) {
        setCompletion(template);
        return;
      }
    }
    setCompletion('');
  }, [body]);

  const handleSend = () => {
    if (!to || !subject || !body) {
      alert('Please fill in all fields');
      return;
    }
    alert(`Email sent!\n\nTo: ${to}\nSubject: ${subject}\nBody: ${body}`);
    // Reset form
    setTo('');
    setSubject('');
    setBody('');
  };

  return (
    <div className="example">
      <h2>✉️ Email Composer</h2>
      <p>
        A realistic email composer with smart suggestions. Try typing common email
        greetings and closings to see context-aware completions.
      </p>

      <div className="example-section">
        <h3>Compose Email</h3>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 600 }}>
            To:
          </label>
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="recipient@example.com"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 600 }}>
            Subject:
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Email subject"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 600 }}>
            Message:
          </label>
          <SmartAutocomplete
            value={body}
            onChange={setBody}
            completion={completion}
            placeholder="Start typing your email... Try 'Hi', 'Thanks', 'Looking forward to'..."
            rows={12}
          />
        </div>

        <button
          onClick={handleSend}
          style={{
            background: '#667eea',
            color: 'white',
            border: 'none',
            padding: '12px 32px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          📤 Send Email
        </button>
      </div>

      <div className="example-section">
        <h3>Available Templates</h3>
        <div className="description">
          <p><strong>Try typing these phrases:</strong></p>
          <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
            {Object.keys(emailTemplates).slice(0, 8).map((key) => (
              <li key={key}>
                <code>{key}</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmailExample;
