import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "np-14",
	localId: 14,

	// Card informations
	name: {
		en: "Latias",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Super Psy",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.WATER
		],
		name: {
			en: "Searing Flame",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
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
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
