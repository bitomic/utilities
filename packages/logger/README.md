# @bitomic/logger
> Logging utility for my projects. Currently depends on [winston](https://www.npmjs.com/package/winston).

## Install
```
yarn add @bitomic/logger
```

## Usage
The main logger can be directly used by:
```ts
import { logger } from '@bitomic/logger'
// also available as a default export
import Logger from '@bitomic/logger'
```

It is a winston logger object. Basic usage:

```ts
logger.info( 'This is an info message!' )
logger.warn( 'This is a warning!' )
logger.error( 'Error!' )
logger.debug( 'Who needs a debugger, anyways' )
```

You can also create a child from it:
```ts
const child = logger.child( { label: 'child' } )
child.info( 'This is an info message from a child logger!' )
```

## History
All logged messages are stored in `history.log` in JSON format. You can also pretty-print it using:

This package registers `history` in the `bin` property of `package.json`. This means you can use it as a command, like:

```
cat history.log | yarn history
```