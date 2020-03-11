import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-80",
	localId: 80,

	// Card informations
	name: {
		en: "Natu",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 177,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Foresight",
		},
		text: {
			en: "Look at the top 3 cards of either player's deck and rearrange them as you like.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Removal Beam",
		},
		text: {
			en: "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose one of those Energy cards and discard it.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
