import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV5",
	localId: "SV5",

	// Card informations
	name: {
		en: "Pheromosa",
		fr: "Cancrelove",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 795,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV5/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV5/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "High Jump Kick",
			fr: "Pied Voltige",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "White Ray",
			fr: "Rayon Blanc",
		},
		text: {
			en: "If you have only 1 Prize card remaining, this attack does 90 more damage.",
			fr: "S’il vous reste exactement 1 carte Récompense, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
