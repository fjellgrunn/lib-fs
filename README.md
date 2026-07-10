# @fjell/lib-fs

Filesystem persistence library for Fjell framework.

## Status

🚧 **Development / Alpha** - This library is under active development.

## Overview

Store Fjell Items as JSON files in the local filesystem with support for the Fjell Operations CRUD interface. Perfect for local development, testing, and desktop applications.

## Features

- ✅ Primary and Contained items CRUD (`get`, `create`, `update`, `upsert`, `remove`, `all`, `one`)
- ✅ Type-safe with TypeScript
- ✅ Hierarchical storage on filesystem
- ✅ Direct filesystem access (Node.js built-ins)

### Not yet implemented

These are planned (see [CHANGELOG.md](./CHANGELOG.md) Next Steps and open issues) but **not** shipped yet:

- ❌ File attachments API (parity with `@fjell/lib-gcs`)
- ❌ Custom finders, actions, and facets

## Installation

```bash
npm install @fjell/lib-fs
```

## Quick Start

```typescript
import { createPrimaryFilesystemLibrary } from '@fjell/lib-fs';

interface User {
  kt: 'user';
  pk: string;
  name: string;
  email: string;
}

const userLib = createPrimaryFilesystemLibrary<User, 'user'>(
  'user',
  'users',
  { globalDirectory: './data' }
);

// Create a user
const user = await userLib.operations.create({
  name: 'Alice',
  email: 'alice@example.com'
});

// File stored at: ./data/users/{uuid}.json
```

## Use Cases

- ✅ Local development and testing
- ✅ Desktop applications
- ✅ Build-time data storage
- ✅ Configuration management
- ✅ Prototyping
- ✅ Development alternative to lib-gcs (CRUD only today)

## Documentation

Coming soon!

## License

Apache-2.0

## Author

Fjell Team
