import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-87",
	localId: 87,

	// Card informations
	name: {
		en: "Misty's Horsea",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 116,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Ink Spurt",
		},
		text: {
			en: "Flip a coin. If heads, whenever the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack does nothing. (This effect lasts until the Defending Pokémon evolves or is Benched.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
