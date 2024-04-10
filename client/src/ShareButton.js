import React, {useState} from 'react'
import './styles.css'
const ShareButton = () => {
    const [copied, setCopied] = useState(false);
    const handleClick = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url) 
          .then(() => {
            console.log('URL copied to clipboard');
            setCopied(true); 
            setTimeout(() => {
              setCopied(false);
            }, 2000);
          })
          .catch(err => {
            console.error('Failed to copy URL: ', err);
          });
      };
  return (
    <>
    <button className="share-button" onClick={handleClick}>
        Share Now
      </button>
      {copied && <div className="copied-message">Copied! Send this link </div>}
      </>
  )
}

export default ShareButton