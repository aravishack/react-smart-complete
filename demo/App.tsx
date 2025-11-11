import * as React from 'react';
import { useState } from 'react';
import BasicExample from './examples/BasicExample';
import PatternExample from './examples/PatternExample';
import EmailExample from './examples/EmailExample';
import CustomStyleExample from './examples/CustomStyleExample';
import './App.css';

type ExampleType = 'basic' | 'pattern' | 'email' | 'styling';

function App() {
  const [activeExample, setActiveExample] = useState<ExampleType>('basic');

  const examples = [
    { id: 'basic', name: '🚀 Basic Usage', component: BasicExample },
    { id: 'pattern', name: '🎯 Pattern Matching', component: PatternExample },
    { id: 'email', name: '✉️ Email Composer', component: EmailExample },
    { id: 'styling', name: '🎨 Custom Styling', component: CustomStyleExample },
  ];

  const ActiveComponent = examples.find(ex => ex.id === activeExample)?.component || BasicExample;

  return (
    <div className="app">
      <header className="header">
        <h1>⚡ React Smart Complete</h1>
        <p className="subtitle">Gmail-style inline autocomplete for React</p>
        <div className="badges">
          <span className="badge">TypeScript</span>
          <span className="badge">React 19</span>
          <span className="badge">Zero Dependencies</span>
        </div>
      </header>

      <nav className="nav">
        {examples.map(example => (
          <button
            key={example.id}
            className={`nav-button ${activeExample === example.id ? 'active' : ''}`}
            onClick={() => setActiveExample(example.id as ExampleType)}
          >
            {example.name}
          </button>
        ))}
      </nav>

      <main className="main">
        <ActiveComponent />
      </main>

      <footer className="footer">
        <p>
          Press <kbd>Tab</kbd> to accept suggestions • Made with ❤️ • 
          <a href="https://github.com/aravishack/react-smart-complete" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
