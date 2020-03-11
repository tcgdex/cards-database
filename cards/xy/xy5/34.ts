import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-34",
	localId: 34,

	// Card informations
	name: {
		en: "Marshtomp",
		fr: "Flobio",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 259,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/34/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/34/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/34/high",
		},
	},

	evolveFrom: {
		en: "Mudkip",
		fr: "Gobou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Endeavor",
			fr: "Effort",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
