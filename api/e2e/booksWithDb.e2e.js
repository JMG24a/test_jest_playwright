const { MongoClient } = require('mongodb');
const request = require('supertest');
const { generateManyBooks } = require('../src/fakes/books.fake');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const DB_URL = config.dbUrl;

describe('workflow test api for books', () => {
  let app = null;
  let server = null;
  let db = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3006);
    const client = new MongoClient(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    db = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    db.dropDatabase();
  });

  describe('endpoint books [GET] from /api/v1/books', () => {
    test('should be a list of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(5);
      const seedData = await db.collection('books').insertMany(fakeBooks);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
