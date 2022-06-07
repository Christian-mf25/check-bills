// eslint-disable-next-line import/no-extraneous-dependencies
import {
  describe,
  expect,
  it,
  jest,
  beforeEach,
} from '@jest/globals';
import {
  digitsWithLetters,
  validDigits,
  digitsBiggerThanFortyEight,
  digitsLowerThanFortySeven,
} from '..';
import { checkParamsIsValid } from '../../middlewares';

describe('unit test for checkParams middleware', () => {
  const mockReq = {};
  const mockRes = {};
  const mockNext = jest.fn();

  beforeEach(() => {
    mockRes.json = jest.fn().mockReturnValue(mockRes);
    mockRes.status = jest.fn().mockReturnValue(mockRes);
  });

  it('test if mockNext was called', () => {
    mockReq.params = {
      digitLines: validDigits,
    };
    checkParamsIsValid(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalled();
    expect(mockNext).toBeCalledTimes(1);
  });

  it('will return error message if digits with letters are sent. Status 422 | Digit line should be numbers only, no spaces or hyphens', () => {
    mockReq.params = {
      digitLines: digitsWithLetters,
    };

    checkParamsIsValid(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalled();
    expect(mockRes.status).toBeCalledTimes(1);
    expect(mockRes.status).toBeCalledWith(422);

    expect(mockRes.json).toBeCalled();
    expect(mockRes.json).toBeCalledTimes(1);
    expect(mockRes.json).toBeCalledWith({
      error: 'Digit line should be numbers only, no spaces or hyphens',
    });
  });

  it('will return an error message if digits greater than 48 are sent. Status 400 | Digit line must contain 48 or 47 digits', () => {
    mockReq.params = {
      digitLines: digitsBiggerThanFortyEight,
    };

    checkParamsIsValid(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalled();
    expect(mockRes.status).toBeCalledTimes(1);
    expect(mockRes.status).toBeCalledWith(400);

    expect(mockRes.json).toBeCalled();
    expect(mockRes.json).toBeCalledTimes(1);
    expect(mockRes.json).toBeCalledWith({
      error: 'Digit line must contain 48 or 47 digits',
    });
  });

  it('will return an error message if digits less than 47 are sent. Status 400 | Digit line must contain 48 or 47 digits', () => {
    mockReq.params = {
      digitLines: digitsLowerThanFortySeven,
    };

    checkParamsIsValid(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalled();
    expect(mockRes.status).toBeCalledTimes(1);
    expect(mockRes.status).toBeCalledWith(400);

    expect(mockRes.json).toBeCalled();
    expect(mockRes.json).toBeCalledTimes(1);
    expect(mockRes.json).toBeCalledWith({
      error: 'Digit line must contain 48 or 47 digits',
    });
  });
});
