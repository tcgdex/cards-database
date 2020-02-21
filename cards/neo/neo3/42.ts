import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-42",
	localId: 42,

	// Card informations
	name: {
		en: "Chinchou",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 170,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/42/high",
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
			Type.LIGHTNING
		],
		name: {
			en: "Positive Ion",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Negative Ion",
		},
		text: {
			en: "If the Defending Pokémon attacks Chinchou during your opponent's next turn, any damage done to Chinchou is reduced by 10 (before applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
