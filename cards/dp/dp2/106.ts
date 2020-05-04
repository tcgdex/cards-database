import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-106",
	localId: 106,

	// Card informations
	name: {
		en: "Totodile",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 158,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		name: {
			en: "Bite",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Shining Fang",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 10 damage plus 10 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
