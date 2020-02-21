import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop4-16",
	localId: 16,

	// Card informations
	name: {
		en: "Wobbuffet",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop4/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop4/16/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Nap",
		},
		text: {
			en: "Remove 2 damage counters from Wobbuffet.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Expand",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Wobbuffet is reduced by 20 (after applying Weakness and Resistance).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "POP Series 4",
		code: "pop4"
	}
}

export default card
