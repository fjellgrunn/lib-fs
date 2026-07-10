import {
  BusinessLogicError,
  NotFoundError,
  PermissionError,
  ValidationError
} from '@fjell/core';

/**
 * Map filesystem errors to Fjell error types without leaking raw paths/stack details.
 */
export function handleFilesystemError(error: any, operation = 'filesystem operation'): Error {
  if (!error) {
    return new BusinessLogicError('Unknown filesystem error', `Retry ${operation}`, false);
  }

  // Already a Fjell-style error
  if (
    error instanceof NotFoundError ||
    error instanceof PermissionError ||
    error instanceof ValidationError ||
    error instanceof BusinessLogicError
  ) {
    return error;
  }

  const code = error.code;

  if (code === 'ENOENT') {
    return new NotFoundError(
      'Filesystem resource not found',
      'resource'
    );
  }

  if (code === 'EACCES' || code === 'EPERM') {
    return new PermissionError(
      'Filesystem permission denied',
      operation,
      [operation]
    );
  }

  if (code === 'ENOSPC' || code === 'EDQUOT') {
    return new BusinessLogicError(
      'Filesystem storage exhausted',
      `Free space and retry ${operation}`,
      true
    );
  }

  return new BusinessLogicError(
    `Filesystem error during ${operation}`,
    `Retry ${operation}`,
    false
  );
}
