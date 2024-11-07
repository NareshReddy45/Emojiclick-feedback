import {useState} from 'react'
import './index.css'

const Feedback = ({resources}) => {
  const {emojis, loveEmojiUrl} = resources
  const [showThankYou, setShowThankYou] = useState(false)

  const handleEmojiClick = () => {
    setShowThankYou(true)
  }

  return (
    <div className="bg-container">
      <div className="container">
        {showThankYou ? (
          <div className="thank-you-container">
            <img
              src={loveEmojiUrl}
              alt="love emoji"
              className="thank-you-emoji"
            />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              <br />
              performance
            </p>
          </div>
        ) : (
          <div>
            <h1>
              How satisfied are you with our
              <br /> customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(emoji => (
                <li key={emoji.id} className="emoji-item">
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji"
                    onClick={handleEmojiClick}
                  />
                  <p>{emoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Feedback
