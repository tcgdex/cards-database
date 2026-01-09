#!/bin/bash
# Benchmark script for GitHub Actions workflow optimization
# Compares current vs optimized git checkout strategies

set -e

RESULTS_FILE=".benchmarks/results.md"
CURRENT_WORKFLOW=".github/workflows/build.yml"
OPTIMIZED_WORKFLOW=".github/workflows/build-optimized.yml"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}[i] GitHub Actions Workflow Benchmark${NC}"
echo "============================================"
echo "Date: $(date)"
echo "Repository: $(git remote get-url origin 2>/dev/null || echo 'local')"
echo "Current commit: $(git rev-parse --short HEAD)"
echo ""

# Initialize results file
cat > "$RESULTS_FILE" << 'EOF'
# Workflow Optimization Benchmark Results

**Date:** $(date)  
**Commit:** $(git rev-parse --short HEAD)  
**ACT Version:** $(act --version)  

## Test Configuration

- **Platform:** macOS (Apple Silicon)
- **Container Architecture:** linux/amd64
- **Event:** pull_request
- **Job:** build (Build TCGdex Server)

## Benchmark Methodology

1. **Clean run:** No cache, simulate first-time build
2. **Cached run:** With GitHub Actions cache, simulate subsequent build
3. **Timing:** Measure total job duration and checkout step specifically

---

EOF

# Function to run benchmark
run_benchmark() {
    local workflow_file=$1
    local test_name=$2
    local cache_flag=$3
    
    echo -e "${YELLOW}[>] Running: $test_name${NC}"
    echo "Workflow: $workflow_file"
    echo "Cache: $cache_flag"
    echo ""
    
    # Clean up previous runs if needed
    if [ "$cache_flag" = "clean" ]; then
        echo "[i] Cleaning cache..."
        rm -rf ~/.cache/act/ 2>/dev/null || true
    fi
    
    # Run ACT and capture timing
    START_TIME=$(date +%s)
    
    # Run act with timing (only validate, don't actually build Docker to save time)
    timeout 600 act pull_request \
        -j build \
        --container-architecture linux/amd64 \
        -W "$workflow_file" \
        --env GITHUB_TOKEN="${GITHUB_TOKEN:-dummy}" \
        2>&1 | tee ".benchmarks/log-${test_name// /-}.txt" || true
    
    END_TIME=$(date +%s)
    DURATION=$((END_TIME - START_TIME))
    
    echo -e "${GREEN}[OK] Completed in ${DURATION}s${NC}"
    echo ""
    
    # Extract checkout timing from logs
    CHECKOUT_TIME=$(grep -i "checkout" ".benchmarks/log-${test_name// /-}.txt" | grep -oE '[0-9]+ms|[0-9]+s' | head -1 || echo "N/A")
    
    # Append to results
    cat >> "$RESULTS_FILE" << EOF
### $test_name

- **Total Duration:** ${DURATION}s
- **Checkout Time:** ${CHECKOUT_TIME}
- **Workflow File:** \`$workflow_file\`
- **Cache State:** $cache_flag

EOF
    
    return $DURATION
}

# Test 1: Current workflow - Clean
echo -e "${BLUE}## Test 1: Current Workflow (No Cache)${NC}"
run_benchmark "$CURRENT_WORKFLOW" "Current - Clean" "clean"
CURRENT_CLEAN=$?

# Test 2: Current workflow - Cached
echo -e "${BLUE}## Test 2: Current Workflow (With Cache)${NC}"
run_benchmark "$CURRENT_WORKFLOW" "Current - Cached" "cached"
CURRENT_CACHED=$?

# Create optimized workflow if not exists
if [ ! -f "$OPTIMIZED_WORKFLOW" ]; then
    echo -e "${YELLOW}[i] Creating optimized workflow...${NC}"
    # Will be created in next step
    exit 0
fi

# Test 3: Optimized workflow - Clean
echo -e "${BLUE}## Test 3: Optimized Workflow (No Cache)${NC}"
run_benchmark "$OPTIMIZED_WORKFLOW" "Optimized - Clean" "clean"
OPTIMIZED_CLEAN=$?

# Test 4: Optimized workflow - Cached
echo -e "${BLUE}## Test 4: Optimized Workflow (With Cache)${NC}"
run_benchmark "$OPTIMIZED_WORKFLOW" "Optimized - Cached" "cached"
OPTIMIZED_CACHED=$?

# Generate comparison
cat >> "$RESULTS_FILE" << EOF

---

## Performance Comparison

| Test Scenario | Current Workflow | Optimized Workflow | Improvement |
|---------------|------------------|-------------------|-------------|
| **Clean (No Cache)** | ${CURRENT_CLEAN}s | ${OPTIMIZED_CLEAN}s | $((CURRENT_CLEAN - OPTIMIZED_CLEAN))s |
| **Cached** | ${CURRENT_CACHED}s | ${OPTIMIZED_CACHED}s | $((CURRENT_CACHED - OPTIMIZED_CACHED))s |

### Key Findings

- **Cache benefit (current):** $((CURRENT_CLEAN - CURRENT_CACHED))s
- **Cache benefit (optimized):** $((OPTIMIZED_CLEAN - OPTIMIZED_CACHED))s
- **Overall improvement:** $((CURRENT_CACHED - OPTIMIZED_CACHED))s on cached builds

EOF

echo -e "${GREEN}[OK] Benchmark complete!${NC}"
echo "Results saved to: $RESULTS_FILE"
