This is a [Next.js 11](https://nextjs.org/blog/next-11) project starter template.

## What this template includes

### For use in your application

- [Day.js](https://day.js.org) for date/time manipulation and display.
- [SWR](https://swr.vercel.app) for data fetching.
- [styled-components](https://styled-components.com) for (you guessed it) styling components.
- [twin.macro](https://github.com/ben-rogerson/twin.macro) for using [TailwindCSS](https://tailwindcss.com/) utilities to create styled components.
- [React Icons](https://react-icons.github.io/react-icons) for a large selection of SVG icons.
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction) for easily displaying unintrusive messages.

### For the developer experience

- [ESLint](https://eslint.org/) to warn about errors and help keep clean code using good (just an opinion) practices. Change at your own will.
- [Prettier](https://prettier.io) to format your code consistantly.
- [Husky](https://typicode.github.io/husky/#/) for creating Git hooks to automatically run tasks before commits or pushes.
- [lint-staged](https://github.com/okonet/lint-staged) to allow linting of only staged files.
- [pretty-quick](https://github.com/azz/pretty-quick) to allow prettier to run only on staged files.
- A Husky pre-commit hook that runs prettier in place on only your staged files (so it is fast) and runs ESLint on only your staged files (so it is fast and you don't have to fix files you didn't touch)

### For testing

- [Jest](https://jestjs.io/) for your testing framework and test runner
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) as a DOM testing utility

## Getting Started

### Installation

**Option 1**
Install the template with `create-next-app` and this repo as the `--example`

```bash
npx create-next-app -e https://github.com/magnatome/next-starter-app-template
```

**or**

```
yarn create next-app -e https://github.com/magnatome/next-starter-app-template
```

**Option 2**
Clone the repo either directly, from a fork or from a new repo generated on
Github by [using this template](https://github.com/magnatome/next-starter-app-template/generate).
Move into your new project's top level directory and run:

```bash
npm install
```

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
