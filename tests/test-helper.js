import Application from 'short-url-ember/app';
import config from 'short-url-ember/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
