import mapSrc from './assets/map.svg';
import App from './lib/app/App'
export * from './lib/biketour2019';
export default () => (
  <App
    mapSrc={mapSrc}
    trailColor={null}
    trailWidth={null}
    trailDash={[0, 4]}
    trailVisitedColor={'#6EC641'}
    trailVisitedWidth={2}
    pointColor={null}
    pointRadius={null}
    pointFutureColor={'#ccc'}
    pointPresentColor={null}
    pointPastColor={null}
    fontPastColor={'#664'}
    fontPresentColor={'#037777777776'}
    fontFutureColor={'#aaa'}
  />
);
