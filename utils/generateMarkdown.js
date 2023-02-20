// function to generate markdown for README
function generateMarkdown(data) {
  let line1 = `# Title: ${data.title}\n`;
  let licenceBadge = `[![License: ${data.licence}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`;
  let toc = `## Table of Contents\n
  [Description](#${data.description})\n
  [Contact](#${data.github})\n
  ## How to:\n
  - [Install](#${data.installCmd})\n
  - [Run](#${data.runCmd})\n
  - [Operate](#${data.operate})\n
  [Licence](#${data.licence})\n
  [Contributions](#${data.contribution})\n`;
  let line2 = `#### Description: ${data.description}\n`;
  let line3 = `## Github Username: ${data.github}\n`;
  let line4 = `### Email Address: ${data.email}\n`;
  let line6 = `### How to install: ${data.installCmd}\n`;
  let line7 = `### How to start: ${data.runCmd}\n`;
  let line8 = `### How to use: ${data.operate}\n`;
  let line9 = `#### Licence: ${data.licence}\n`;
  let line10 = `#### Notable contributions: ${data.contribution}\n`;
  let func = line1 + licenceBadge + toc + line2 + line3 + line4 + line6 + line7 + line8 + line9 + line10;
  return func;
}

module.exports = generateMarkdown;
