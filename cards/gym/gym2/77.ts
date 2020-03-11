import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-77",
	localId: 77,

	// Card informations
	name: {
		en: "Koga's Ekans",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 23,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/77/high",
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
			en: "Fast",
		},
		text: {
			en: "Acting Poison",
		},
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
