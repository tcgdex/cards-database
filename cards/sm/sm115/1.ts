import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-1",
	localId: 1,

	// Card informations
	name: {
		en: "Caterpie",
		fr: "Chenipan",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 10,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/1/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/1/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "tetsuya koizumi",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
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
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
