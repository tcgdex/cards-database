import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop2-3",
	localId: 3,

	// Card informations
	name: {
		en: "Raikou",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 243,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop2/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop2/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Roar",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunder",
		},
		text: {
			en: "Flip a coin. If tails, Raikou does 20 damage to itself.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 2",
		code: "pop2"
	}
}

export default card
