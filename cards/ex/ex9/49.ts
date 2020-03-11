import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-49",
	localId: 49,

	// Card informations
	name: {
		en: "Feebas",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 349,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 64,
		type: AbilityType.POKEBODY,
		name: {
			en: "Submerge",
		},
		text: {
			en: "As long as Feebas is on your Bench, prevent all damage done to Feebas by attacks (both yours and your opponent's).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Lunge",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
