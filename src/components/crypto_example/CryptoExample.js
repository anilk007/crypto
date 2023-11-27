import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const CryptoExample = () => {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleEncrypt = () => {
    if (inputText) {
      const encryptedData = CryptoJS.AES.encrypt(inputText, 'secretKey').toString();
      setEncryptedText(encryptedData);
    }
  };

  const handleDecrypt = () => {
    if (encryptedText) {
      try {
        const decryptedData = CryptoJS.AES.decrypt(encryptedText, 'secretKey').toString(CryptoJS.enc.Utf8);
        setDecryptedText(decryptedData);
      } catch (error) {
        console.error('Error decrypting data:', error);
      }
    }
  };

  return (
    <div>
      <h2>Encrypt and Decrypt Data</h2>
      <div>
        <label>
          Input Text:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <button onClick={handleEncrypt}>Encrypt</button>
        <button onClick={handleDecrypt}>Decrypt</button>
      </div>
      <div>
        <strong>Encrypted Text:</strong>
        <p>{encryptedText}</p>
      </div>
      <div>
        <strong>Decrypted Text:</strong>
        <p>{decryptedText}</p>
      </div>
    </div>
  );
};

export default CryptoExample;
