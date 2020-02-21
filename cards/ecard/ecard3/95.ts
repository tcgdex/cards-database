import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-95",
	localId: 95,

	// Card informations
	name: {
		en: "Seel",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 86,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Headbutt",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Beam",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
