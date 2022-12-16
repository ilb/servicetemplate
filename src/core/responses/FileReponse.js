import Response from './Response.js';

export default class FileResponse extends Response {
  /**
   * @param res
   * @param file
   * @param contentType
   * @param filename
   */
  static build({ file, contentType, filename }, res) {
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-Length', file.length);
    res.setHeader('Content-Type', contentType);
    res.write(file, 'binary');
    res.end();
  }

  static exception(exception, res = null) {
    res
      .status(exception.status || 500)
      .json({ error: exception.message || 'Упс... Что-то пошло не так' });
  }
}