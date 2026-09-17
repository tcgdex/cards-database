interface CacheEntry<V> {
	value: V
	expiresAt: number
}

export class TTLCache<K, V> {
	private map = new Map<K, CacheEntry<V>>()

	set(key: K, value: V, ttlMs: number): void {
		this.map.set(key, { value, expiresAt: Date.now() + ttlMs })
	}

	get(key: K): V | undefined {
		const entry = this.map.get(key)

		if (!entry) {
			return undefined
		}

		if (Date.now() > entry.expiresAt) {
			this.map.delete(key)
			return undefined
		}

		return entry.value
	}

	has(key: K): boolean {
		return this.get(key) !== undefined
	}

	delete(key: K): void {
		this.map.delete(key)
	}
}
