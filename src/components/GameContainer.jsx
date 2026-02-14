import { useState, useEffect, useRef } from 'react'
import './GameContainer.css'

const GameContainer = () => {
  const [currentWord, setCurrentWord] = useState('')
  const [userInput, setUserInput] = useState('')
  const [streak, setStreak] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  // Fetch a random word from the API
  const fetchRandomWord = async () => {
    setIsLoading(true)
    setError('')
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=1')
      if (!response.ok) {
        throw new Error('Failed to fetch word')
      }
      const data = await response.json()
      setCurrentWord(data[0])
      setUserInput('')
      setIsLoading(false)
    } catch (err) {
      setError('Failed to load word. Please try again.')
      setIsLoading(false)
    }
  }

  // Initialize game
  useEffect(() => {
    fetchRandomWord()
  }, [])

  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [currentWord])

  const handleInputChange = (e) => {
    const value = e.target.value
    setUserInput(value)

    // Check if user typed the correct word (case-sensitive)
    if (value === currentWord) {
      setStreak(streak + 1)
      fetchRandomWord()
    } else if (currentWord.startsWith(value)) {
      // User is typing correctly so far
    } else {
      // User made a mistake
      setStreak(0)
      setError('Wrong letter! Streak reset.')
      setTimeout(() => setError(''), 2000)
    }
  }

  const resetGame = () => {
    setStreak(0)
    setUserInput('')
    fetchRandomWord()
    setError('')
  }

  return (
    <div className="game-container">
      <h1>Practice Typing</h1>
      
      {error && <div className="error">{error}</div>}
      
      <div className="streak-display">
        <h2>Streak: {streak}</h2>
      </div>

      <div className="word-display">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="current-word">{currentWord}</div>
        )}
      </div>

      <div className="input-container">
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Start typing..."
          disabled={isLoading}
          className="typing-input"
        />
      </div>

      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ 
            width: `${(userInput.length / currentWord.length) * 100}%` 
          }}
        ></div>
      </div>

      <div className="stats">
        <p>Target: {currentWord}</p>
        <p>Progress: {userInput.length}/{currentWord.length}</p>
      </div>

      <button onClick={resetGame} className="reset-btn">
        Reset Game
      </button>
    </div>
  )
}

export default GameContainer