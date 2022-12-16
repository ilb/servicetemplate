import Usecases from '../core/base/usecases/Usecases.js';

export default class ExampleUsecases extends Usecases {
  /**
   * @param {ExampleRepository} exampleRepository
   * @param {object} request
   * @returns {Promise<{text: string}>}
   */
  async list({ exampleRepository, request }) {
    console.log(request);
    console.log('ExampleRepository table name: ', exampleRepository.table);
    return { text: 'list' };
  }

  /**
   * @returns {Promise<{text: string}>}
   */
  async create() {
    return { text: 'create' };
  }

  /**
   * @returns {Promise<{text: string}>}
   */
  async read() {
    return { text: 'read' };
  }

  /**
   * @returns {Promise<{text: string}>}
   */
  async update() {
    return { text: 'update' };
  }

  /**
   * @returns {Promise<{text: string}>}
   */
  async delete() {
    return { text: 'delete' };
  }

  /**
   * @param {FileService} fileService
   * @returns {Promise<{file: Buffer, filename: *, contentType: *}>}
   */
  async print({ fileService }) {
    return fileService.get('exampleFile.txt');
  }
}
