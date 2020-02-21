import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop9-7",
	localId: 7,

	// Card informations
	name: {
		en: "Croagunk",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 453,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop9/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop9/7/high",
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
			en: "Knock Off",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 card from your opponent's hand without looking and discard it.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Nimble",
		},
		text: {
			en: "If you have Turtwig in play, remove from Croagunk the number of damage counters equal to the damage you did to the Defending Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "POP Series 9",
		code: "pop9"
	}
}

export default card
