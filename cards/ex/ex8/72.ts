import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-72",
	localId: 72,

	// Card informations
	name: {
		en: "Shroomish",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 285,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stun Spore",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Trip Over",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
