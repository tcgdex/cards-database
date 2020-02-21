import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-97",
	localId: 97,

	// Card informations
	name: {
		en: "Skarmory",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 227,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Peck",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
		},
		damage: 10
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Head",
		},
		text: {
			en: "Flip a coin. If heads, switch Skarmory with 1 of your Benched Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
