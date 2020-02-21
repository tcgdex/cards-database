import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



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





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
