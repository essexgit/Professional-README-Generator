// function to generate markdown for README
function generateMarkdown(data) {
  const line1 = `# Title: ${data.title}\n`;
  // const licenceBadge = `[![Licence: ${data.licence}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`;
  const linkDescription = data.description.replaceAll(" ", "%20");
  const linkGit = data.github.replaceAll(" ", "%20");
  const linkInstall = data.installCmd.replaceAll(" ", "%20");
  const linkRunCmd = data.runCmd.replaceAll(" ", "%20");
  const linkOperate = data.operate.replaceAll(" ", "%20");
  const linkLicence = data.licence.replaceAll(" ", "%20");
  const linkContribution = data.contribution.replaceAll(" ", "%20");
  const licenceBadges = {
    "Creative Commons Attribution 4.0": "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)",
    "Creative Commons Attribution Share Alike 4.0": "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)",
    "Educational Community License v2.0": "[![License: ECL](https://img.shields.io/badge/License-EducationalCommunityLicense_2.0-pink.svg)](https://opensource.org/license/ecl2-php/)",
    "Eclipse Public License 1.0": "[![License: EPL](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "Eclipse Public License 2.0": "[![License: EPL-2](https://img.shields.io/badge/License-EPL_2.0-green.svg)](https://opensource.org/license/epl-2-0/)",
    "European Union Public License 1.1": "[![License: EPL-3](https://img.shields.io/badge/License-EUPL_1.1-blue.svg)](https://opensource.org/license/eupl-1-1/)",
    "GNU Affero General Public License v3.0": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    "GNU General Public License family": "[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://opensource.org/license/gpl-1-0/)",
    "GNU General Public License v2.0": "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://opensource.org/license/gpl-2-0/)",
    "GNU General Public License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-2.0)",
    "GNU Lesser General Public License family": "[![License: LGPL](https://img.shields.io/badge/License-LGPL-black.svg)](https://opensource.org/license/lgpl/)",
    "GNU Lesser General Public License v2.1": "[![License: LGPL v2-1](https://img.shields.io/badge/License-LGPLv2_1-black.svg)](https://opensource.org/license/lgpl-2-1/)",
    "GNU Lesser General Public License v3.0": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "ISC": "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "LaTeX Project Public License v1.3c": "[![License LaTex](https://img.shields.io/badge/License-LaTex-teal.svg)](https://opensource.org/license/lppl/)",
    "Microsoft Public License": "[![License: Microsoft Public License](https://img.shields.io/badge/License-MicrosoftPublicLicense-aqua.svg)](https://opensource.org/license/ms-pl-html/)",
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "Open Software License 3.0": "[![License: OSL 3.0](https://img.shields.io/badge/License-OSL_3.0-green.svg)(https://opensource.org/license/osl-3-0-php/)",
    "PostgreSQL License": "[![License: Postgres](https://img.shields.io/badge/License-PostgreSql-white.svg)](https://opensource.org/license/postgresql/)",
    "SIL Open Font License 1.1": "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
    "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "zLib License": "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
  };
  const licenceBadge = function () {
    for (let openLicence in licenceBadges) {
      if (openLicence == data.licence) {
        console.log(licenceBadges[openLicence]);
        return licenceBadges[openLicence];
      }
    }
  };
  const toc = `## Table of Contents\n
  [Description](#${linkDescription})\n
  [Contact](#${linkGit})\n
  ## How to:\n
  - [Install](#${linkInstall})\n
  - [Run](#${linkRunCmd})\n
  - [Operate](#${linkOperate})\n
  - [Licence](#${linkLicence})\n
  - [Contributions](#${linkContribution})\n`;
  const line2 = `## Description: ${data.description}\n`;
  const line3 = `## Github Username: ${data.github}\n`;
  const line4 = `### Email Address: ${data.email}\n`;
  const line6 = `### How to install: ${data.installCmd}\n`;
  const line7 = `### How to start: ${data.runCmd}\n`;
  const line8 = `### How to use: ${data.operate}\n`;
  const line9 = `### Licence: ${data.licence}\n`;
  const line10 = `### Notable contributions: ${data.contribution}\n`;
  const func = line1 + licenceBadge() + "\n" + toc + line2 + line3 + line4 + line6 + line7 + line8 + line9 + line10;
  return func;
}

module.exports = generateMarkdown;
