# @fjell/lib-fs - Agentic Guide

## Purpose

Filesystem-backed Fjell library implementation for local persistence and testing.

This guide is optimized for AI-assisted code generation and integration workflows.

## Documentation

- **[Usage Guide](./usage.md)** - API-oriented usage patterns and model-safe examples
- **[Integration Guide](./integration.md)** - Architecture placement, composition rules, and implementation guidance

## Key Capabilities

- Implements primary and contained library behavior on filesystem storage
- Exposes filesystem-specific library factories and options
- Useful for local development, test rigs, and small-scale deployments

## Installation

```bash
npm install @fjell/lib-fs
```

## Public API Highlights

- `FilesystemLibrary` and `FilesystemLibraryFactory`
- `createPrimaryFilesystemLibrary` and `createContainedFilesystemLibrary`
- File typing exports and shared Fjell key/item types
