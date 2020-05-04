import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-15",
	localId: 15,

	// Card informations
	name: {
		en: "Scatterbug",
		fr: "Lépidonille",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 664,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/15/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/15/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
