

## the Code Runner settings
create .vscode/settings.json

```json
// .vscode/settings.json
{
  "code-runner.executorMap": {
    "typescript": "bun $fullFileName",
    "typescriptreact": "bun $fullFileName"
  },
  // Optional: runs code in the integrated terminal for interactivity
  "code-runner.runInTerminal": true,
  // Optional: clear previous output before running
  "code-runner.clearPreviousOutput": true
}
```


```shell

bun init


```

## Install the required dependencies:

ESLint: For linting.
Winston: For logging.
ESLint plugins: To enhance linting for security, TypeScript, and more.
```shell
bun install --dev eslint @eslint/js typescript-eslint eslint-plugin-security eslint-plugin-prettier eslint-plugin-unicorn
bun install winston
```


```shell
bun run lint
bun run src/index.ts

# auto fix
bunx eslint . --fix
```


refer: https://vdelacou.medium.com/build-a-production-ready-typescript-app-with-bun-eslint-and-vscode-integration-a9c183cc2682