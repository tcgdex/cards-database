import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-93",
	localId: 93,

	// Card informations
	name: {
		en: "Mareep",
	},

	hp: 40,

	type: [
		Type.LIGHTNING,
	],

	dexId: 179,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hizuki Misono",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Charge",
		},
		text: {
			en: "Attach 1 Energy card in your discard pile to Mareep.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Tail Slap",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
