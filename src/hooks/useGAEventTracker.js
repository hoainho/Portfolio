import ReactGA from 'react-ga4';

const useGAEventTracker = (category = 'General') => {
  const trackEvent = (action = 'action', label = 'label') => {
    ReactGA.event({
      category,
      action,
      label,
    });
  };

  return trackEvent;
};

export default useGAEventTracker;