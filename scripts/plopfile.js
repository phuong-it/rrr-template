module.exports = function (plop) {
  plop.setActionType('renameMany', require('../plop-actions/renameMany'));
  plop.setHelper('replace', function (match, replacement, options) {
    let string = options.fn(this);
    return string.replace(match, replacement);
  });

  plop.setHelper('includes', function (array, string) {
    return array.includes(string)
  });

  // controller generator
  plop.setGenerator('component', {
    description: 'add new component',
    prompts: [{
      type: 'input',
      name: 'packageName',
      message: 'package name, all lowercase (e.g. textfield)',
      validate: (answer) => answer.length > 0
    }, {
      type: 'input',
      name: 'componentName',
      message: 'component name, please use appropriate uppercase (e.g. TextField)',
      validate: (answer) => answer.length > 0
    }],
    actions: function (data) {
      let { packageName, componentName } = data;
      let actions = [];

      actions.push({
        type: 'addMany',
        templateFiles: '../plop-templates/@react-components/**',
        base: '../plop-templates/@react-components/',
        destination: `../src/components/${packageName}`,
        data: { packageName, componentName }
      });

      actions.push({
        type: 'renameMany',
        templateFiles: `src/components/${packageName}/**`,
        renamer: name => `${name.replace('Component', componentName)}`
      });

      return actions;
    }
  });
};
