import './Loader.scss'

interface LoaderProps {
  message?: string
  size?: 'small' | 'medium' | 'large'
}

function Loader({ message = 'Connecting...', size = 'medium' }: LoaderProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  }

  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className={`loader-spinner ${sizeClasses[size]}`}>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        {message && (
          <p className="loader-message">{message}</p>
        )}
      </div>
    </div>
  )
}

export default Loader