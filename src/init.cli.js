#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const figlet = require('figlet')
const askQuestions = require('./questions')

// Load templates
const loadTemplate = (type, lang) => {
  try {
    return fs.readFileSync(
      path.join(__dirname, 'templates', `${type}.${lang}`),
      'utf8',
    )
  } catch (err) {
    console.error(chalk.red(`Error loading template: ${err.message}`))
    process.exit(1)
  }
}

// Generate file
const generateFile = async () => {
  // Show banner
  console.log(
    chalk.yellow(
      figlet.textSync('RN Generator', {
        horizontalLayout: 'full',
      }),
    ),
  )

  // Ask questions
  const { fileType, fileName, language, confirm } = await askQuestions()

  if (!confirm) {
    console.log(chalk.yellow('File generation cancelled.'))
    return
  }

  // Determine paths
  const baseDir = fileType === 'component' ? 'components' : 'screens'
  const componentDir = path.join(process.cwd(), 'src', baseDir, fileName)
  const fileExtension = language === 'ts' ? 'tsx' : 'jsx'
  const indexPath = path.join(componentDir, `index.${fileExtension}`)
  const stylesPath = path.join(componentDir, `styles.${language}`)

  // Load and process template
  const template = loadTemplate(fileType, language)
  const processedTemplate = template.replace(/{{componentName}}/g, fileName)

  // Create directory and files
  try {
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir, { recursive: true })
    }

    fs.writeFileSync(indexPath, processedTemplate)
    fs.writeFileSync(stylesPath, '')

    console.log(
      chalk.green(
        `\nSuccessfully generated ${fileType} ${fileName} at:\n${componentDir}\n`,
      ),
    )
  } catch (err) {
    console.error(chalk.red(`Error generating files: ${err.message}`))
    process.exit(1)
  }
}

generateFile()
