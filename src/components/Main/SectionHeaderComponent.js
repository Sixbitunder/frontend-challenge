import React from 'react';

const SectionHeaderComponent = (props) => {
  return(
      <h2 className={"section-heading " + props.className}>{props.title}</h2>
  );
}

export default SectionHeaderComponent;