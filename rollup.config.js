/* eslint-env es6 */

const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const terser = require('rollup-plugin-terser').terser;
const optional = require('./rollup.plugins').optional;
const stylesheet = require('./rollup.plugins').stylesheet;
const pkg = require('./package.json');

const input = 'src/index.js';
const banner = `/*!
 * Chart.js v${pkg.version}
 * ${pkg.homepage}
 * (c) ${new Date().getFullYear()} Chart.js Contributors
 * Released under the MIT License
 */`;

module.exports = [
	// {
	// 	input: input,
	// 	plugins: [
	// 		resolve(),
	// 		commonjs(),
	// 		stylesheet(),
	// 	],
	// 	output: {
	// 		name: 'Chart',
	// 		file: 'dist/Chart.js',
	// 		banner: banner,
	// 		format: 'iife',
	// 		indent: false,
	// 	},
	// },
	{
		input: input,
		plugins: [
			resolve(),
			commonjs(),
			stylesheet({
				minify: true
			}),
			terser({
				output: {
					preamble: banner
				}
			})
		],
		output: {
			name: 'Chart',
			file: 'dist/Chart.min.js',
			format: 'iife',
			indent: false,
		},
	},
	// {
	// 	input: input,
	// 	plugins: [
	// 		resolve(),
	// 		commonjs(),
	// 		stylesheet()
	// 	],
	// 	output: {
	// 		name: 'Chart',
	// 		file: 'dist/Chart.umd.js',
	// 		format: 'umd',
	// 		banner: banner,
	// 		indent: false
	// 	}
	// },
	{
		input: input,
		plugins: [
			resolve(),
			commonjs(),
			stylesheet({
				minify: true
			}),
			terser({
				output: {
					preamble: banner
				}
			})
		],
		output: {
			name: 'Chart',
			file: 'dist/Chart.umd.min.js',
			format: 'umd',
			indent: false
		}
	}
];
