const Generator = require('@ngx-rocket/core');
const chalk = require('chalk');
const pkg = require('../../package.json');

class AddonAzureDeployGenerator extends Generator {
  // DO NOT add a constructor, it won't be called.
  // Use initializing() method instead.
  //
  // See Yeoman's doc run loop priorities for the list of specific tasks:
  // http://yeoman.io/authoring/running-context.html

  initializing() {
    // Setting version allows Yeoman to notify the user of updates
    this.version = pkg.version;
    this.log(`Using ${chalk.cyan('azure-deploy')} ${chalk.green(this.version)}`);

    // Allow to pre-set any props in another add-on generator
    // If don't want your generator prompts to be overridable, remove this line.
    Object.assign(this.props, this.sharedProps);
  }

  beforeWriting() {
    // Augment this generator's properties with shared properties after prompts,
    // so it can be used in templates
    Object.assign(this.props, this.sharedProps);
  }

  end() {
    if (this.props.azureDeploy) {
      this.log(`\nConfiguring ${chalk.cyan('Azure')}, please wait...\n`);
      const result = this.spawnCommandSync('ng', ['add', '@azure/ng-deploy']);

      if (result.error) {
        this.log(`${chalk.red('Something went wrong :(')}`);
        this.log(`You can retry manually using ${chalk.yellow('npx ng add @azure/ng-deploy')}`);
      }
    }

    if (this.props.firebaseDeploy && !this.updating) {
      this.log(`- $ ${chalk.green(`${this.packageManager} run deploy`)}: deploy app to Azure`);
    }
  }
}

module.exports = Generator.make({
  baseDir: __dirname,
  generator: AddonAzureDeployGenerator,
  type: 'client',
  prompts: [
    {
      type: 'confirm',
      name: 'azureDeploy',
      message: 'Do you want to deploy your app on Azure?',
      default: true
    }
  ]
});
