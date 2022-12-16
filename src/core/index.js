import Kernel from '../Kernel.js';
import JsonResponse from './responses/JsonResponse.js';
import nc from 'next-connect';
import ExampleUsecases from '../usecases/ExampleUsecases.js';
import JsonContext from './contexts/JsonContext.js';

export function handle(usecases, method, responseHandler = JsonResponse) {
  return async (req, res) => {
    try {
      const context = await JsonContext.build({ req, res });
      const scope = await createScope(context);

      const instance = new usecases(scope.cradle);
      const result = await instance[method](scope.cradle);

      return responseHandler.build(result, res);
    } catch (exception) {
      console.log(exception);
      return responseHandler.exception(exception, res);
    }
  };
}

export function crudHandler(nameOrUsecases, usecases) {
  usecases = usecases || nameOrUsecases;
  const name = nameOrUsecases || usecases.constructor.name.substring(0, -8);

  return nc()
    .get(`/${name}`, handle(ExampleUsecases, 'list'))
    .post(`/${name}`, handle(ExampleUsecases, 'create'))
    .get(`/${name}/:uuid`, handle(ExampleUsecases, 'read'))
    .put(`/${name}/:uuid`, handle(ExampleUsecases, 'update'))
    .delete(`/${name}/:uuid`, handle(ExampleUsecases, 'delete'));
}

export async function createScope(context) {
  const kernel = new Kernel();

  return kernel.createApplication(context);
}
