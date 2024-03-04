const BooksService = require('./books.service');
const { generateManyBooks } = require('../fakes/books.fake');

const mockSpyGetAll = jest.fn();
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => (
  {
    getAll: mockSpyGetAll,
    create: () => {},
  }
)));

describe('test for booksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for get books - whit white box', () => {
    test('should be return 2 books', async () => {
      // arrange
      const fakeBooks = generateManyBooks(2);
      mockSpyGetAll.mockResolvedValue(fakeBooks);

      // act
      const books = await service.getBooks({});

      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
