import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-58",
	localId: 58,

	// Card informations
	name: {
		en: "Sabrina's Kadabra",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 64,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/58/high",
		},
	},

	evolveFrom: {
		en: "Abra",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Life Drain",
		},
		text: {
			en: "Flip a coin. If heads, put a number of damage counters on the Defending Pokémon so that its remaining HP are 10.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psyshot",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
