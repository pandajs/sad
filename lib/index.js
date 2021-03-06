exports.register = function (server, options, next) {
  server.ext('onPostHandler', function(request, reply) {
      reply.request.response.headers['X-Clacks-Overhead'] = 'GNU Terry Pratchett';
      reply.continue();
  });
  next();
};

exports.register.attributes = {     // hapi requires attributes for a plugin.
    pkg: require('../package.json') // See: http://hapijs.com/tutorials/plugins
};
