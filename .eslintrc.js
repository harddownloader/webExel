module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ['prettier', 'unicorn'],
	extends: [
		'plugin:unicorn/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {},
		ecmaVersion: 12,
		sourceType: 'module',
	},

	rules: {
		'unicorn/prefer-query-selector': 'off',
		'import/no-unresolved': 'off',
		'unicorn/prevent-abbreviations': 1,
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					camelCase: true,
					pascalCase: true,
				},
			},
		],
		'import/extensions': [
			'error',
			'never',
			{
				svg: 'always',
				png: 'always',
				jpg: 'always',
			},
		],
		quotes: ['error', 'single'],
	},
	settings: {
		version: 'detect', // React version. "detect" автоматически выбирает версию, которую вы установили.
		flowVersion: '0.53', // Версия потока
	},
}