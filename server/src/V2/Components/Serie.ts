import { objectLoop } from '@dzeio/object-util'
import { Serie as SDKSerie, SerieResume, SupportedLanguages } from '@tcgdex/sdk'
import Set from './Set'
import { Pagination } from '../../interfaces'
import { lightCheck } from '../../util'

type LocalSerie = Omit<SDKSerie, 'sets'> & {sets: () => Array<Set>}

export default class Serie implements LocalSerie {

	id!: string
	name!: string
	logo?: string | undefined

	public constructor(
		private lang: SupportedLanguages,
		private serie: SDKSerie
	) {
		objectLoop(serie, (it, key) => {
			if (key === 'sets') {
				return
			}
			this[key as 'id'] = it
		})
	}

	public sets(): Array<Set> {
		return this.serie.sets.map((s) => Set.findOne(this.lang, {id: s.id}) as Set)
	}

	public static find(lang: SupportedLanguages, params: Partial<Record<keyof SDKSerie, any>> = {}, pagination?: Pagination) {
		let list = (require(`../../../generated/${lang}/series.json`) as Array<SDKSerie>)
			.filter((c) => objectLoop(params, (it, key) => {
				if (key === 'id') return c[key] === it
				return lightCheck(c[key as 'id'], it)
			}))
		if (pagination) {
			list = list
				.splice(pagination.count * pagination.page - 1, pagination.count)
		}
		return list.map((it) => new Serie(lang, it))
	}

	public static findOne(lang: SupportedLanguages, params: Partial<Record<keyof Serie, any>> = {}): Serie | undefined {
		const res = (require(`../../../generated/${lang}/series.json`) as Array<SDKSerie>)
			.find((c) => {
				return objectLoop(params, (it, key) => {
					if (key === 'id') return c[key] === it
					return lightCheck(c[key as 'id'], it)
				})
			})
		if (!res) {
			return undefined
		}
		return new Serie(lang, res)
	}

	public resume(): SerieResume {
		return {
			id: this.id,
			name: this.name,
			logo: this.logo
		}
	}

	public full(): SDKSerie {
		return this.serie
	}
}
