import '@testing-library/jest-dom/extend-expect'
import MockLocalStorage from './mocks/mockLocalStorage'

afterEach(() => {
  jest.clearAllMocks()
  jest.restoreAllMocks()
  jest.resetModules()
})

global.localStorage = new MockLocalStorage()
