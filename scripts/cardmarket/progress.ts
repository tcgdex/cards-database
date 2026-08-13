export type ProgressCallback = (current: number, detail?: string) => void

function formatDuration(seconds: number | undefined): string {
	if (seconds === undefined || !Number.isFinite(seconds)) return '--'
	if (seconds < 60) return `${Math.max(1, Math.round(seconds))}s`
	const minutes = Math.floor(seconds / 60)
	const remainingSeconds = Math.round(seconds % 60)
	return `${minutes}m ${remainingSeconds.toString().padStart(2, '0')}s`
}

export class ProgressTracker {
	private phase = ''
	private total = 0
	private startedAt = 0
	private lastOutputAt = 0

	start(phase: string, total: number): ProgressCallback {
		this.phase = phase
		this.total = total
		this.startedAt = Date.now()
		this.lastOutputAt = 0
		this.write(0, undefined, true)
		return (current, detail) => this.update(current, detail)
	}

	message(message: string) {
		console.log(`[progress] ${message}`)
	}

	private update(current: number, detail?: string) {
		this.write(current, detail, current >= this.total)
	}

	private write(current: number, detail: string | undefined, force: boolean) {
		const now = Date.now()
		if (!force && now - this.lastOutputAt < 1000) return
		this.lastOutputAt = now
		const elapsedSeconds = (now - this.startedAt) / 1000
		const percentage = this.total === 0 ? 100 : Math.min(100, (current / this.total) * 100)
		const etaSeconds = current > 0 && this.total > current
			? elapsedSeconds * (this.total - current) / current
			: undefined
		const suffix = detail ? ` - ${detail}` : ''
		const eta = etaSeconds === undefined ? '' : `, ETA ${formatDuration(etaSeconds)}`
		console.log(`[progress] ${this.phase}: ${current}/${this.total} (${percentage.toFixed(1)}%), elapsed ${formatDuration(elapsedSeconds)}${eta}${suffix}`)
	}
}
