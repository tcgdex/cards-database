import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY158",
	localId: "XY158",

	// Card informations
	name: {
		en: "M Beedrill-EX",
	},

	hp: 200,

	type: [
		Type.GRASS,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY158/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY158/high",
		},
	},

	evolveFrom: {
		en: "Beedrill-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Hazard Stinger",
		},
		text: {
			en: "Discard all Energy attached to this Pokémon. Your opponent's Active Pokémon is now Paralyzed and Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
