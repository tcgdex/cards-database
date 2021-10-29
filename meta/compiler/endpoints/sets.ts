import { Set as SetSingle, Card as CardSingle, SetResume } from '../../definitions/api'
import { getSets, isSetAvailable, setToSetSimple, setToSetSingle } from '../utils/setUtil'
import { Languages, Set } from '../../../interfaces'
import { Endpoint } from '../compilerInterfaces'
import { cardToCardSingle, getCards } from '../utils/cardUtil'

type SetList = Array<SetResume>

export default class implements Endpoint<SetList, SetSingle, CardSingle, Array<Set>> {

	public constructor(
		private lang: keyof Languages
	) {}

	public async index(common: Array<Set>): Promise<SetList> {
		const sets = common
			.sort((a, b) => a.releaseDate > b.releaseDate ? 1 : -1)

		const tmp: SetList = await Promise.all(sets.map((el) => setToSetSimple(el, this.lang)))

		return tmp
	}

	public async item(common: Array<Set>): Promise<Record<string, SetSingle>> {
		const sets = await Promise.all(common
			.map((set) => setToSetSingle(set, this.lang)))
		const res: Record<string, SetSingle> = {}

		for (const set of sets) {
			res[set.name] = set
			res[set.id] = set
		}

		return res
	}

	public async common(): Promise<Array<Set>> {
		return getSets(undefined, this.lang)
	}

	public async sub(common: Array<Set>, item: string): Promise<Record<string, CardSingle> | undefined> {
		const set = common.find((s) => s.name[this.lang] === item || s.id === item)

		if (!set || !isSetAvailable(set, this.lang)) {
			return undefined
		}

		const lit = await getCards(this.lang, set)
		const list: Record<string, CardSingle> = {}
		for await (const card of lit) {
			list[card[0]] = await cardToCardSingle(card[0], card[1], this.lang)
		}

		return list
	}

}
