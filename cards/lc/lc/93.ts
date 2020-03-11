import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "lc-93",
	localId: 93,

	// Card informations
	name: {
		en: "Slowpoke",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 79,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/lc/lc/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/lc/lc/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spacing Out",
		},
		text: {
			en: "Flip a coin. If heads, remove a damage counter from Slowpoke. This attack can't be used if Slowpoke has no damage counters on it.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Scavenge",
		},
		text: {
			en: "Discard 1 Energy card attached to Slowpoke in order to use this attack. Put a Trainer card from your discard pile into your hand.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "lc"
	}
}

export default card
