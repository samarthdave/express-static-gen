const APPNAME = 'Example App',
  DELIMITER = '-';

let title = (data) =>
  (data) ? `${APPNAME} ${DELIMITER} ${data}` : APPNAME;

module.exports = [
  {
    route: '/',
    template: 'index',
    data: {
      title: title()
    }
  }
];
