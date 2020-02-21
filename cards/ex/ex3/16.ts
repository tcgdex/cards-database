import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-16",
	localId: 16,

	// Card informations
	name: {
		en: "Girafarig",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 203,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/16/high",
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
			en: "Synchronized Search",
		},
		text: {
			en: "If Girafarig and the Defending Pokémon have the same amount of Energy attached to them, pick any 1 card from your deck and put it into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Breaking Impact",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each Colorless Energy in that Pokémon's Retreat Cost to that Pokémon (after applying effects to the Retreat Cost). (Don't apply Weakness and Resistance for Benched Pokémon.)\"",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
