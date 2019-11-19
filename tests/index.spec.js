import withAccepts from '../src/index'

describe('micro-methods', () => {
  it('should serve a request with a supported method', async () => {
    const json = jest.fn()
    const decorated = withAccepts({ json })

    const res = {
      setHeader: jest.fn(),
      getHeader: jest.fn(() => true),
      end: jest.fn(),
    }
    await expect(
      decorated({ headers: { accept: 'application/json' } }, res),
    ).resolves.toEqual(undefined)
  })
  it('should fail to serve a request with an unsupported method', async () => {
    const json = jest.fn()
    const decorated = withAccepts({ json })

    const res = {
      setHeader: jest.fn(),
      getHeader: jest.fn(() => true),
      end: jest.fn(),
    }
    await expect(
      decorated({ headers: { accept: 'application/xml' } }, res),
    ).resolves.toEqual(undefined)
    expect(res).toHaveProperty('statusCode', 406)
    expect(res.setHeader).toHaveBeenCalled()
    expect(res.setHeader.mock.calls).toMatchSnapshot('setHeader calls')
    expect(res.end).toHaveBeenCalledTimes(1)
    expect(res.end.mock.calls[0]).toMatchSnapshot('body')
  })
})
