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
      </div>
    </div>
  );
}

export default NotFound;
