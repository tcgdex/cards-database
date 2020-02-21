import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-32",
	localId: 32,

	// Card informations
	name: {
		en: "Misty's Tentacool",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 72,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mysterious Light",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Jellyfish Pod",
		},
		text: {
			en: "Search your deck for any number of Pokémon named Tentacool, Tentacruel, Misty's Tentacool, or Misty's Tentacruel. Show those cards to your opponent, then put them into your hand. Shuffle your deck afterward.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
