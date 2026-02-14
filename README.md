# React Typing Game

A simple and interactive typing game built with React that helps improve typing speed and accuracy.

## 🌐 **Live Demo**

**Play the game here:** https://tjagadeeswarreddy.github.io/react-typing-game

![GitHub Pages Deployment](https://img.shields.io/badge/GitHub%20Pages-Deployed-green?style=for-the-badge&logo=github)

## 🎯 Project Requirements

- **React 18** - Modern React framework for building user interfaces
- **Vite** - Fast build tool and development server
- **JavaScript ES6+** - Modern JavaScript features
- **Fetch API** - For making HTTP requests to external APIs
- **CSS3** - Modern styling with flexbox and responsive design

## 📖 About This Project

This is a typing practice game designed to help users improve their typing skills in a fun and engaging way. The game fetches random words from a public API and challenges users to type them correctly.

### How It Works

1. **Random Word Generation**: The game fetches random words from the Random Word API
2. **Case-Sensitive Typing**: Users must type words exactly as displayed (including proper case)
3. **Streak Counter**: Tracks consecutive correct words typed
4. **Real-time Validation**: Provides instant feedback as you type
5. **Progress Visualization**: Shows typing progress with a progress bar
6. **Error Handling**: Resets streak when any mistake is made

### Key Features

- ✅ **Case-Sensitive Validation** - Ensures accurate typing practice
- ✅ **Streak Tracking** - Motivates users to maintain accuracy
- ✅ **Real-time Feedback** - Instant validation as you type
- ✅ **Responsive Design** - Works on desktop and mobile devices
- ✅ **Professional UI** - Clean, modern interface
- ✅ **Error Recovery** - Clear error messages with shake animation

## 🚀 How to Run Locally

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js) or yarn

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tjagadeeswarreddy/react-typing-game.git
   cd react-typing-game
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port specified in your terminal)

### Alternative: Using Yarn

If you prefer yarn:
```bash
yarn install
yarn dev
```

## 🎮 Use Cases

This typing game is perfect for:

- **Students** - Practicing typing skills for school assignments
- **Professionals** - Improving typing speed for work efficiency
- **Gamers** - Enhancing keyboard skills and reaction time
- **Language Learners** - Practicing typing in different languages
- **Anyone** - Looking to improve their typing accuracy and speed

### Educational Benefits

- **Improved Typing Speed** - Regular practice increases words per minute
- **Better Accuracy** - Case-sensitive validation promotes precision
- **Enhanced Focus** - Real-time feedback keeps users engaged
- **Stress Relief** - Fun way to practice typing without pressure
- **Skill Building** - Builds muscle memory for keyboard layout

## 🛠️ Tech Stack

### Frontend Technologies

- **React 18** - Component-based UI framework
- **Vite** - Lightning-fast build tool and dev server
- **JavaScript ES6+** - Modern JavaScript with arrow functions, async/await
- **CSS3** - Modern styling with flexbox, animations, and responsive design

### Development Tools

- **ESLint** - Code linting for consistent code quality
- **Git** - Version control
- **GitHub** - Code hosting and collaboration

### External APIs

- **Random Word API** - Provides random words for typing practice
  - Endpoint: `https://random-word-api.herokuapp.com/word?number=1`
  - Returns: JSON array with random words

## 📁 Project Structure

```
typing-game/
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Global styles
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global CSS reset
│   └── components/
│       ├── GameContainer.jsx    # Game logic and UI
│       └── GameContainer.css    # Game-specific styles
├── public/
│   └── vite.svg             # Vite logo (optional)
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md               # This file
```

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Thanks to the Random Word API for providing free word data
- Inspired by classic typing games and typing tutors
- Built with the amazing React and Vite ecosystem

---

**Happy Typing!** 🎯⌨️