import { Serie as SerieSingle, SerieResume } from '../../../meta/definitions/api'
import { Languages, Serie } from '../../../interfaces'
import { Endpoint } from '../compilerInterfaces'
import { getSeries, serieToSerieSimple, serieToSerieSingle } from '../utils/serieUtil'

type SerieList = Array<SerieResume>

export default class implements Endpoint<SerieList, SerieSingle, Record<string, any>, Array<Serie>> {

	public constructor(
		private lang: keyof Languages
	) {}

	public async index(common: Array<Serie>): Promise<Array<SerieResume>> {
		return Promise.all(common.map((s) => serieToSerieSimple(s, this.lang)))
	}

	public async item(common: Array<Serie>): Promise<Record<string, SerieSingle>> {
		const items: Record<string, SerieSingle> = {}
		for await (const val of common) {
			const gen = await serieToSerieSingle(val, this.lang)
			const name = val.name[this.lang] as string
			items[name] = gen
			items[val.id] = gen
		}
		return items
	}

	public async common(): Promise<Array<Serie>> {
		return getSeries(this.lang)
	}

}
