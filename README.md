# jest-ts-utils
Typesafe mocking with Jest and Typescript

## Usage

```ts
import {readFileSync} from 'fs'
import {mocked} from "./mocked"

jest.mock('fs')

it('should enable intellisense with mock... helpers', () => {
  mocked(readFileSync).mockReturnValueOnce('some string')
  expect(readFileSync("bla")).toBe('some string')
})
```  