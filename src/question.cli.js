const { prompt } = require('inquirer')
const chalk = require('chalk')

const questions = [
  {
    type: 'list',
    name: 'fileType',
    message: 'What do you want to generate?',
    choices: ['Component', 'Screen'],
    filter: (val) => val.toLowerCase(),
  },
  {
    type: 'input',
    name: 'fileName',
    message: 'Enter the name:',
    validate: (input) => {
      if (/^[A-Z][A-Za-z]*$/.test(input)) return true
      return 'Name should start with uppercase letter and contain only letters'
    },
  },
  {
    type: 'list',
    name: 'language',
    message: 'JavaScript or TypeScript?',
    choices: ['JavaScript', 'TypeScript'],
    filter: (val) => (val === 'JavaScript' ? 'js' : 'ts'),
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: 'Are you sure you want to generate this file?',
    default: true,
  },
]

module.exports = async function askQuestions() {
  console.log(chalk.green('\nReact Native File Generator\n'))
  const answers = await prompt(questions)
  return answers
}
