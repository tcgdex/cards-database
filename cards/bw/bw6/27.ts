import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw6/27/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/27/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/27/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/27/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



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

