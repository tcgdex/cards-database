import { Card as CardSingle, CardResume } from '../../../meta/definitions/api'
import { Card, Languages } from '../../../interfaces'
import { Endpoint } from '../compilerInterfaces'
import { cardToCardSimple, cardToCardSingle, getCards } from '../utils/cardUtil'

type CardList = Array<CardResume>

export default class implements Endpoint<CardList, CardSingle, Record<string, unknown>, Array<[string, Card]>> {

	public constructor(
		private lang: keyof Languages
	) {}

	public async index(common: Array<[string, Card]>): Promise<CardList> {
		return Promise.all(common.map((c) => cardToCardSimple(c[0], c[1], this.lang)))
	}

	public async item(common: Array<[string, Card]>): Promise<Record<string, CardSingle>> {
		const items: Record<string, CardSingle> = {}
		for await (const card of common) {
			items[`${card[1].set.id}-${card[0]}`] = await cardToCardSingle(card[0], card[1], this.lang)
		}
		return items
	}

	public async common(): Promise<Array<[string, Card]>> {
		return getCards(this.lang)
	}

}
