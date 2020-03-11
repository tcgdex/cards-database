import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-12",
	localId: 12,

	// Card informations
	name: {
		en: "Karrablast",
		fr: "Carabing",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 588,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/12/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/12/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s’inflige 10 dégâts.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
