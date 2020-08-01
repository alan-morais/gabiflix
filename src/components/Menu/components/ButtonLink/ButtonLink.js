import React from 'react';

// eslint-disable-next-line react/prop-types
function ButtonLink({ className, href, children }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

export default ButtonLink;
