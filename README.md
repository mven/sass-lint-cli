# Sass Lint CLI
A CLI package for [Sass Lint](https://github.com/sasstools/sass-lint)

## Installation
```bash
npm install sass-lint-cli
```

## Config File Support
Custom configuration using `.sass-lint.yaml` is not yet supported and will fallback to [Sass Lint's sample configuration](https://github.com/sasstools/sass-lint/blob/master/lib/config/sass-lint.yml). Support for custom configs is in the works.


## Examples
```bash
sl-cli main.scss
sl-cli *.scss
sl-cli **/*.scss
```
