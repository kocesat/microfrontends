import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function MarketingApp() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      }
    });

    if (onParentNavigate) {
      history.listen(onParentNavigate);
    };

  }, []);

  return (
    <div ref={ref} />
  )
}

export default MarketingApp;