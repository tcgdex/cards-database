# Workflow Optimization Benchmark Results

**Date:** Fri Jan  9 09:55:55 CET 2026  
**Commit:** `d3f8ed97b`  
**Platform:** Darwin arm64

## Test Configuration

Testing checkout step performance:
- **Current:** fetch-depth: 0 (full history)
- **Optimized:** fetch-depth: 10 (shallow with recent history)

---

## Test Results

### Current - clean

- **Duration:** 141s
- **Log:** `.benchmarks/log-Current-clean.txt`

### Current - cached

- **Duration:** 5s
- **Log:** `.benchmarks/log-Current-cached.txt`

