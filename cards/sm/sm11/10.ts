import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-10",
	localId: 10,

	// Card informations
	name: {
		en: "Dwebble",
		fr: "Crabicoque",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 557,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/10/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/10/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dig Claws",
			fr: "Creusogriffes",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
