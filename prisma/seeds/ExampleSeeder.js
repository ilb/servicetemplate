import Seeder from '../../src/core/base/Seeder.js';

export default class ExampleSeeder extends Seeder {
  async run() {
    const examples = [
      {
        id: 1,
        code: 'example',
        name: 'Пример',
      },
    ];

    await this.createMany(examples);
  }
}
