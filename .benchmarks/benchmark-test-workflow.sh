#!/bin/bash
set -e

# Test Workflow Local Benchmark Script
# Compares master vs optimized test workflow performance

REPO_DIR="/Users/admin/workspace/cardium/libs/cards-database"
BENCHMARK_DIR="$REPO_DIR/.benchmarks"
RESULTS_FILE="$BENCHMARK_DIR/test-workflow-results.txt"
CURRENT_BRANCH=$(git branch --show-current)

echo "======================================================================"
echo "  Test Workflow Local Benchmark"
echo "======================================================================"
echo ""
echo "Current branch: $CURRENT_BRANCH"
echo "Repository: $REPO_DIR"
echo "Results: $RESULTS_FILE"
echo ""
echo "This will:"
echo "  1. Benchmark master branch test workflow"
echo "  2. Benchmark optimized branch test workflow"
echo "  3. Compare compilation times"
echo "  4. Compare total CPU time"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 1
fi

# Initialize results file
cat > "$RESULTS_FILE" << EOF
# Test Workflow Benchmark Results
Date: $(date +"%Y-%m-%d %H:%M:%S")
System: $(uname -s) $(uname -m)

EOF

echo ""
echo "======================================================================"
echo "  Phase 1: Benchmark Master Branch (3× Compilation)"
echo "======================================================================"
echo ""

# Save current state
git stash push -m "Benchmark: temp stash" 2>/dev/null || true

# Checkout master
git checkout master
git pull origin master --quiet

echo ""
echo "[1/3] Simulating Ubuntu compilation..."
echo ""

START_UBUNTU_MASTER=$(date +%s)
(
    cd server
    bun install --frozen-lockfile > /dev/null 2>&1
    echo "Starting compilation..."
    bun run compile
) 2>&1 | tee "$BENCHMARK_DIR/master-ubuntu.log"
END_UBUNTU_MASTER=$(date +%s)
UBUNTU_MASTER_TIME=$((END_UBUNTU_MASTER - START_UBUNTU_MASTER))

echo ""
echo "[OK] Ubuntu compilation: ${UBUNTU_MASTER_TIME}s"
echo ""

# Clean for next run
rm -rf server/generated

echo ""
echo "[2/3] Simulating Windows compilation..."
echo ""

START_WINDOWS_MASTER=$(date +%s)
(
    cd server
    bun install --frozen-lockfile > /dev/null 2>&1
    echo "Starting compilation..."
    bun run compile
) 2>&1 | tee "$BENCHMARK_DIR/master-windows.log"
END_WINDOWS_MASTER=$(date +%s)
WINDOWS_MASTER_TIME=$((END_WINDOWS_MASTER - START_WINDOWS_MASTER))

echo ""
echo "[OK] Windows compilation: ${WINDOWS_MASTER_TIME}s"
echo ""

# Clean for next run
rm -rf server/generated

echo ""
echo "[3/3] Simulating macOS compilation..."
echo ""

START_MACOS_MASTER=$(date +%s)
(
    cd server
    bun install --frozen-lockfile > /dev/null 2>&1
    echo "Starting compilation..."
    bun run compile
) 2>&1 | tee "$BENCHMARK_DIR/master-macos.log"
END_MACOS_MASTER=$(date +%s)
MACOS_MASTER_TIME=$((END_MACOS_MASTER - START_MACOS_MASTER))

echo ""
echo "[OK] macOS compilation: ${MACOS_MASTER_TIME}s"
echo ""

# Calculate master totals
MASTER_TOTAL_CPU=$((UBUNTU_MASTER_TIME + WINDOWS_MASTER_TIME + MACOS_MASTER_TIME))
MASTER_WALL_CLOCK=$UBUNTU_MASTER_TIME  # Parallel execution
if [ $WINDOWS_MASTER_TIME -gt $MASTER_WALL_CLOCK ]; then
    MASTER_WALL_CLOCK=$WINDOWS_MASTER_TIME
fi
if [ $MACOS_MASTER_TIME -gt $MASTER_WALL_CLOCK ]; then
    MASTER_WALL_CLOCK=$MACOS_MASTER_TIME
fi

echo ""
echo "======================================================================"
echo "  Phase 2: Benchmark Optimized Branch (1× Compilation)"
echo "======================================================================"
echo ""

# Checkout optimized branch
git checkout "$CURRENT_BRANCH"

# Restore stashed changes if any
git stash pop 2>/dev/null || true

# Clean compilation directory
rm -rf server/generated

echo ""
echo "[1/1] Running compilation once (Ubuntu)..."
echo ""

START_COMPILE_OPT=$(date +%s)
(
    cd server
    bun install --frozen-lockfile > /dev/null 2>&1
    echo "Starting compilation..."
    bun run compile
) 2>&1 | tee "$BENCHMARK_DIR/optimized-compile.log"
END_COMPILE_OPT=$(date +%s)
COMPILE_OPT_TIME=$((END_COMPILE_OPT - START_COMPILE_OPT))

echo ""
echo "[OK] Single compilation: ${COMPILE_OPT_TIME}s"
echo ""

# Simulate artifact compression
echo ""
echo "Simulating artifact upload (compression)..."
START_ARTIFACT=$(date +%s)
tar -czf "$BENCHMARK_DIR/compiled-artifact.tar.gz" server/generated/
END_ARTIFACT=$(date +%s)
ARTIFACT_TIME=$((END_ARTIFACT - START_ARTIFACT))
ARTIFACT_SIZE=$(du -h "$BENCHMARK_DIR/compiled-artifact.tar.gz" | cut -f1)

echo "[OK] Artifact compressed: $ARTIFACT_SIZE in ${ARTIFACT_TIME}s"
echo ""

# Simulate artifact download (3× for 3 OS)
echo ""
echo "Simulating artifact downloads (3× OS)..."
DOWNLOAD_TIMES=()
for OS in ubuntu windows macos; do
    START_DOWNLOAD=$(date +%s)
    mkdir -p "$BENCHMARK_DIR/test-$OS"
    tar -xzf "$BENCHMARK_DIR/compiled-artifact.tar.gz" -C "$BENCHMARK_DIR/test-$OS"
    END_DOWNLOAD=$(date +%s)
    DOWNLOAD_TIME=$((END_DOWNLOAD - START_DOWNLOAD))
    DOWNLOAD_TIMES+=($DOWNLOAD_TIME)
    echo "[OK] $OS download: ${DOWNLOAD_TIME}s"
done
echo ""

# Calculate optimized totals
AVG_DOWNLOAD=$((( ${DOWNLOAD_TIMES[0]} + ${DOWNLOAD_TIMES[1]} + ${DOWNLOAD_TIMES[2]} ) / 3))
OPT_TOTAL_CPU=$((COMPILE_OPT_TIME + ARTIFACT_TIME + ${DOWNLOAD_TIMES[0]} + ${DOWNLOAD_TIMES[1]} + ${DOWNLOAD_TIMES[2]}))
OPT_WALL_CLOCK=$((COMPILE_OPT_TIME + ARTIFACT_TIME + AVG_DOWNLOAD))

# Cleanup
rm -rf "$BENCHMARK_DIR/test-ubuntu" "$BENCHMARK_DIR/test-windows" "$BENCHMARK_DIR/test-macos"
rm -f "$BENCHMARK_DIR/compiled-artifact.tar.gz"

echo ""
echo "======================================================================"
echo "  Benchmark Results"
echo "======================================================================"
echo ""

# Write results
{
    echo ""
    echo "## Master Branch (3× Compilation)"
    echo "- Ubuntu compilation: ${UBUNTU_MASTER_TIME}s"
    echo "- Windows compilation: ${WINDOWS_MASTER_TIME}s"
    echo "- macOS compilation: ${MACOS_MASTER_TIME}s"
    echo "- Total CPU time: ${MASTER_TOTAL_CPU}s ($(($MASTER_TOTAL_CPU / 60))m $(($MASTER_TOTAL_CPU % 60))s)"
    echo "- Wall-clock time: ${MASTER_WALL_CLOCK}s ($(($MASTER_WALL_CLOCK / 60))m $(($MASTER_WALL_CLOCK % 60))s) - parallel"
    echo ""
    echo "## Optimized Branch (1× Compilation + Artifact Sharing)"
    echo "- Single compilation: ${COMPILE_OPT_TIME}s"
    echo "- Artifact upload: ${ARTIFACT_TIME}s (size: $ARTIFACT_SIZE)"
    echo "- Ubuntu download: ${DOWNLOAD_TIMES[0]}s"
    echo "- Windows download: ${DOWNLOAD_TIMES[1]}s"
    echo "- macOS download: ${DOWNLOAD_TIMES[2]}s"
    echo "- Total CPU time: ${OPT_TOTAL_CPU}s ($(($OPT_TOTAL_CPU / 60))m $(($OPT_TOTAL_CPU % 60))s)"
    echo "- Wall-clock time: ${OPT_WALL_CLOCK}s ($(($OPT_WALL_CLOCK / 60))m $(($OPT_WALL_CLOCK % 60))s) - sequential"
    echo ""
    echo "## Comparison"
    echo ""
    
    # Calculate savings
    CPU_SAVED=$((MASTER_TOTAL_CPU - OPT_TOTAL_CPU))
    CPU_PERCENT=$((CPU_SAVED * 100 / MASTER_TOTAL_CPU))
    
    WALL_DIFF=$((OPT_WALL_CLOCK - MASTER_WALL_CLOCK))
    if [ $WALL_DIFF -gt 0 ]; then
        WALL_STATUS="slower"
    else
        WALL_STATUS="faster"
        WALL_DIFF=$((-WALL_DIFF))
    fi
    
    echo "### CPU Time (Real Savings)"
    echo "- Master: ${MASTER_TOTAL_CPU}s"
    echo "- Optimized: ${OPT_TOTAL_CPU}s"
    echo "- Saved: ${CPU_SAVED}s (${CPU_PERCENT}%)"
    echo ""
    echo "### Wall-Clock Time (User Experience)"
    echo "- Master: ${MASTER_WALL_CLOCK}s (parallel)"
    echo "- Optimized: ${OPT_WALL_CLOCK}s (sequential)"
    echo "- Difference: ${WALL_DIFF}s ${WALL_STATUS}"
    echo ""
    echo "### Analysis"
    echo "- Compilation runs: 3 → 1 (67% reduction)"
    echo "- CPU time saved: ${CPU_PERCENT}%"
    echo "- Cost savings: ~${CPU_PERCENT}% (especially on macOS with 10× multiplier)"
    echo "- Environmental: ${CPU_PERCENT}% less compute resources"
    echo ""
    
    if [ $WALL_STATUS = "slower" ]; then
        echo "Note: Wall-clock time is slightly longer because:"
        echo "  - Master: 3 OS compile in parallel (bottleneck: slowest OS)"
        echo "  - Optimized: Sequential (compile → upload → download → test)"
        echo "  - Trade-off: +${WALL_DIFF}s wall-clock for -${CPU_SAVED}s CPU (${CPU_PERCENT}% cost savings)"
    else
        echo "Note: Both wall-clock and CPU time improved!"
    fi
    
} | tee -a "$RESULTS_FILE"

echo ""
echo "======================================================================"
echo "  Benchmark Complete!"
echo "======================================================================"
echo ""
echo "Results saved to: $RESULTS_FILE"
echo ""
echo "Summary:"
echo "  [OK] CPU time saved: ${CPU_SAVED}s (${CPU_PERCENT}%)"
echo "  [OK] Cost reduction: ~${CPU_PERCENT}%"
echo "  [OK] Compilations: 3 → 1"
echo ""

if [ $WALL_STATUS = "slower" ]; then
    echo "  [i] Wall-clock: +${WALL_DIFF}s (expected trade-off for CPU savings)"
else
    echo "  [OK] Wall-clock: -${WALL_DIFF}s faster"
fi

echo ""
