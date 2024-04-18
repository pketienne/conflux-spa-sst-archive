/* eslint-disable @typescript-eslint/no-unused-vars */
import { SSTConfig } from 'sst';
import { API } from './stacks/MyStack';

export default {
	config(_input) {
		return {
			name: 'conflux-spa-sst',
			region: 'us-east-1',
		};
	},
	stacks(app) {
		app.stack(API);
	},
} satisfies SSTConfig;