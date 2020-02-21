import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "np-18",
	localId: 18,

	// Card informations
	name: {
		en: "Mudkip",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 258,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Surf",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Whirlpool",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
