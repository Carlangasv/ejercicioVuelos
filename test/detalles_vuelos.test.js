const router = require('../api')
const request = require('supertest')

describe('GET /detallesVuelo/:id', () => {
  it('traer un json con los detalles del vuelo', done => {
    request(router).get('/detallesVuelo/c0c32e6e-c689-49e3-8b39-5baabf69e51a').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200, done)
  })

  it('Devuelve un mensaje de error porque el id no existe', done => {
    request(router).get('/detallesVuelo/c0c32e6e-c689-49e3-8b39-5baabf69e51a3').set('Accept', 'application/json').expect(404).expect('Vuelo no encontrado').end(err => {
      if (err) return done(err);
      done();
    })
  })

  it('Devuelve error porque el vuelo no es vigente', done => {
    request(router).get('/detallesVuelo/c0c32e6e-c689-49e3-8b39-5baabf69e51a4').set('Accept', 'application/json').expect(400).expect('Vuelo no disponible').end(err => {
      if (err) return done(err);
      done();
    })
  })

  it('Devuelve que no hay sillas disponibles', done => {
    request(router).get('/detallesVuelo/c0c32e6e-c689-49e3-8b39-5baabf69e51a2').set('Accept', 'application/json').expect(400).expect('El vuelo no tiene mas sillas disponibles').end(err => {
      if (err) return done(err);
      done();
    })
  })

})
