import * as zoid from 'zoid/dist/zoid.frameworks';

let HeliumWidget = zoid.create({
  tag: 'helium-widget',
  url: 'https://fervent-einstein-ea077e.netlify.app',
  dimensions: {
    width: '500px',
    height: '450px',
  },
  attributes: {
    iframe: {
      allow: 'geolocation',
    },
  },
});

console.log('yo! have loaded widget from parent: ');
console.log(HeliumWidget);

export default HeliumWidget;
