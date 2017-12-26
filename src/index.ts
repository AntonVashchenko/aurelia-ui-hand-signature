import { FrameworkConfiguration } from 'aurelia-framework';

export * from './hand-signature';



export function configure(config: FrameworkConfiguration) {
  config.globalResources('./hand-signature');
}
