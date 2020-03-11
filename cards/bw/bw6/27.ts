import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-27",
	localId: 27,

	// Card informations
	name: {
		en: "Feebas",
		fr: "Barpau",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 349,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/27/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/27/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Add-a-Dash",
			fr: "Rallonge",
		},
		text: {
			en: "Flip 2 coins. For each heads, draw a card.",
			fr: "Lancez 2 pièces. Pour chaque côté face, piochez une carte.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
