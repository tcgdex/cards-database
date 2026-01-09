# Workflow Optimization Benchmark Results

**Date:** Fri Jan  9 09:54:32 CET 2026  
**Commit:** `d3f8ed97b`  
**ACT Version:** act version 0.2.84

## Test Environment

- **Platform:** Darwin arm64
- **Docker:** Docker version 28.5.2, build ecc6942
- **Container Architecture:** linux/amd64
- **Event Type:** pull_request
- **Job:** build (Build TCGdex Server)

---

## Benchmark Methodology

Each workflow is tested in two scenarios:
1. **Clean Run:** No cache, simulates first-time build
2. **Cached Run:** With GitHub Actions cache, simulates subsequent build

For each test:
- Total job duration measured
- Checkout step timing extracted from logs
- Cache hit/miss recorded
- Build completion verified

---

## Test Results

### Current - Clean

- **Total Duration:** 0s
- **Checkout Time:** 
- **Cache Hit:** No
- **Log File:** `.benchmarks/log-Current-Clean.txt`

### Current - Cached

- **Total Duration:** 0s
- **Checkout Time:** 
- **Cache Hit:** No
- **Log File:** `.benchmarks/log-Current-Cached.txt`

### Optimized - Clean

- **Total Duration:** 0s
- **Checkout Time:** 
- **Cache Hit:** No
- **Log File:** `.benchmarks/log-Optimized-Clean.txt`

### Optimized - Cached

- **Total Duration:** 0s
- **Checkout Time:** 
- **Cache Hit:** No
- **Log File:** `.benchmarks/log-Optimized-Cached.txt`

