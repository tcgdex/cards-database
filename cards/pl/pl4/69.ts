import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-69",
	localId: 69,

	// Card informations
	name: {
		en: "Nosepass",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 299,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Harden",
		},
		text: {
			en: "During your opponent's next turn, if Nosepass would be damaged by an attack, prevent that attack's damage done to Nosepass if that damage is 30 or less.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Knock Away",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
