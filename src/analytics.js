import ReactGA from 'react-ga';

const initializeAnalytics = () => {
  ReactGA.initialize('UA-171500746-1');
};

const logPageView = () => {
ReactGA.pageview(window.location.pathname + window.location.search);
};

const logPageExit = () => {
    ReactGA.event({
        category: 'User',
        action: 'Left Page',
        label: 'Page Exit'
    });
};
  

export { initializeAnalytics, logPageView, logPageExit };