import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-69",
	localId: 69,

	// Card informations
	name: {
		en: "Onix",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 95,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/69/high",
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
			en: "Horn Rush",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Granite Head",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Onix by attacks is reduced by 10 (after applying Weakness and Resistance).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
