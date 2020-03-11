import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-79",
	localId: 79,

	// Card informations
	name: {
		en: "Koga's Koffing",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 109,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Smelly Gas",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage to each Benched Pokémon (including your own). (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
