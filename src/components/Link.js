import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault();

    window.history.pushState({}, '', href);
  };

  return (
    <a 
      href={href}
      onClick={onClick} 
      className={className} 
    >
      {children}
    </a>
  )
};

export default Link;