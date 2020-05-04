import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-10",
	localId: 10,

	// Card informations
	name: {
		en: "Lotad",
		fr: "Nénupiot",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 270,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/10/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/10/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
