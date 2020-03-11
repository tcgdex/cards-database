import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-12",
	localId: 12,

	// Card informations
	name: {
		en: "Pansage",
		fr: "Feuillajou",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 511,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/12/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/12/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
