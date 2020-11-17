import React, { useState, useEffect } from 'react';
import googleTranslateAPI from '../api/googleAPI';
import axios from 'axios';

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
      params: {
        q: text,
        target: language.value,
        key: googleTranslateAPI
      }
    })
  }, [language, text]);

  return (
    <div />
  );
};

export default Convert;