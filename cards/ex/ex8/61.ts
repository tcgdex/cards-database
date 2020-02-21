import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-61",
	localId: 61,

	// Card informations
	name: {
		en: "Goldeen",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 118,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Supersonic",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Waterfall",
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
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
