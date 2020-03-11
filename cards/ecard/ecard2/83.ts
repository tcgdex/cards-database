import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-83",
	localId: 83,

	// Card informations
	name: {
		en: "Hoppip",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 187,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",

	abilities: [{
		id: 253,
		type: AbilityType.POKEBODY,
		name: {
			en: "Lightweight",
		},
		text: {
			en: "You pay Colorless less to retreat Hoppip for each Grass Energy attached to it.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Careless Tackle",
		},
		text: {
			en: "Hoppip does 10 damage to itself.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
