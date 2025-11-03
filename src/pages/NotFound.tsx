function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="sad-face-container">
          <svg
            className="sad-face"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left eye */}
            <rect x="60" y="70" width="20" height="20" fill="#000" />

            {/* Right eye */}
            <rect x="120" y="70" width="20" height="20" fill="#000" />

            {/* Sad mouth - pixelated frown */}
            <rect x="70" y="140" width="10" height="10" fill="#000" />
            <rect x="80" y="135" width="10" height="10" fill="#000" />
            <rect x="90" y="133" width="10" height="10" fill="#000" />
            <rect x="100" y="133" width="10" height="10" fill="#000" />
            <rect x="110" y="135" width="10" height="10" fill="#000" />
            <rect x="120" y="140" width="10" height="10" fill="#000" />
          </svg>
        </div>

        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Page Not Found</p>
        <p className="not-found-description">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="not-found-credit">
          <span>Made Wid </span>
          <svg
            className="heart-icon"
            viewBox="0 0 24 24"
            fill="#ff0000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span> by Kichu</span>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
