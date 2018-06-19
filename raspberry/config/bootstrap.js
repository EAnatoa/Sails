/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

const request = require('request');

module.exports.bootstrap = async function (done) {

  setInterval(
    () => {
      console.log('Enviar datos');

      const objetoRequest = {
        url: 'http://localhost:1338/Usuario',
        form: {
          nombre: 'Adrian',
          apellido: 'Eguez'
        }
      };
      request
        .post(objetoRequest,
          (err, respuesta, body) => {
            console.log('err', err);
            console.log('respuesta', respuesta);
            console.log('body', body);
          })
    }
    , 10000);

  return done();

};



// By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)

