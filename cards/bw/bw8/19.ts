import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-19",
	localId: 19,

	// Card informations
	name: {
		en: "Pansear",
		fr: "Flamajou",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 513,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/19/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/19/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/19/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Double Fire",
			fr: "Double Feu",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
