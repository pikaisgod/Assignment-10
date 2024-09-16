const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for your logo:',
    validate: input => input.length <= 3 || 'Please enter no more than three characters.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hex):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for your logo:',
    choices: ['Circle', 'Square', 'Triangle']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hex):',
  }
];

inquirer.prompt(questions).then(answers => {
  let shape;
  
  switch (answers.shape) {
    case 'Circle':
      shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
      break;
    case 'Square':
      shape = new Square(answers.text, answers.textColor, answers.shapeColor);
      break;
    case 'Triangle':
      shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
      break;
  }

  const svgContent = shape.render();
  
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
});
