import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-37",
	localId: 37,

	// Card informations
	name: {
		en: "Swanna",
		fr: "Lakmécygne",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 581,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/37/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/37/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/37/high",
		},
	},

	evolveFrom: {
		en: "Ducklett",
		fr: "Couaneton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-Aile",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brave Bird",
			fr: "Rapace",
		},
		text: {
			en: "This Pokémon does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
