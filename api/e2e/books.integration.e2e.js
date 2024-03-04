const mockSpyGetAll = jest.fn();
const request = require('supertest');
const { generateManyBooks } = require('../src/fakes/books.fake');
const createApp = require('../src/app');

jest.mock('../src/lib/mongo.lib.js', () => jest.fn().mockImplementation(() => (
  {
    getAll: mockSpyGetAll,
    create: () => {},
  }
)));

describe('workflow test api for books', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('endpoint books [GET] from /api/v1/books', () => {
    test('should be a list of books', () => {
      // Arrange
      const fakeBooks = generateManyBooks(2);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
