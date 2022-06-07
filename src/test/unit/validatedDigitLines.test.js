// eslint-disable-next-line import/no-extraneous-dependencies
import {
  describe,
  expect,
  it,
  jest,
  beforeEach,
} from '@jest/globals';
import { invalidDigits, validDigits } from '..';
import { validatedDigitLines } from '../../middlewares';

describe('unit test for validatedDigitLines middleware', () => {
  const mockReq = {};
  const mockRes = {};
  const mockNext = jest.fn();

  beforeEach(() => {
    mockRes.json = jest.fn().mockReturnValue(mockRes);
    mockRes.status = jest.fn().mockReturnValue(mockRes);
  });

  it('test if mockNext was called and req has type key', () => {
    mockReq.params = {
      digitLines: validDigits,
    };

    validatedDigitLines(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalled();
    expect(mockNext).toBeCalledTimes(1);
    expect(mockReq).toHaveProperty('type');
  });

  it('Returns a message if the check digit is invalid. Status 400 | Check digit does not agree with the typewritable line', () => {
    mockReq.params = {
      digitLines: invalidDigits,
    };

    validatedDigitLines(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalled();
    expect(mockRes.status).toBeCalledTimes(1);
    expect(mockRes.status).toBeCalledWith(400);

    expect(mockRes.json).toBeCalled();
    expect(mockRes.json).toBeCalledTimes(1);
    expect(mockRes.json).toBeCalledWith({
      error: 'Check digit does not agree with the typewritable line',
    });
  });
});
