import {readFileSync} from 'fs'
import {mocked} from "./mocked"

jest.mock('fs')

describe('mock a function', () => {
  it('should enable intellisense with mock... helpers', () => {
    mocked(readFileSync).mockReturnValueOnce('some string')
    expect(readFileSync("bla")).toBe('some string')
  })

  it('should produce typescript errors for invalid types', () => {
    // @ts-expect-error because returned value must be string | Buffer
    mocked(readFileSync).mockReturnValue(0)

    // @ts-expect-error because path must be number | PathLike
    mocked(readFileSync).mockImplementation((path: boolean) => `some data form ${path}`)
  })
})