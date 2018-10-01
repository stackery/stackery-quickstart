const fs = require('fs');
exports.handler = async event => {
  // Log http request
  console.log(event);

  const responseBody = fs.readFileSync('./welcome.html', 'utf8');
  // Build an HTTP response.
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: responseBody
  };

  return response;
};
