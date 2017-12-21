import { FrameworkConfiguration } from 'aurelia-framework';

export * from './hello-world';
export * from './hand-signature';



export function configure(config: FrameworkConfiguration) {
  config.globalResources('./hello-world');
  config.globalResources('./hand-signature');
}
