import React from 'react';

function PreviewComponent({ content }) {
  if (content.type === 'image') {
    return <img src={content.url} alt="Preview" />;
  }
  if (content.type === 'video') {
    return <video src={content.url} controls />;
  }
  if (content.type === 'document') {
    return <a href={content.url} target="_blank" rel="noopener noreferrer">View Document</a>;
  }
  return null;
}

export default PreviewComponent;
