import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-101",
	localId: 101,

	// Card informations
	name: {
		en: "Pinsir",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 127,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Grab",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Super Slice",
		},
		text: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
