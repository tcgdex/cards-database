import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-61",
	localId: 61,

	// Card informations
	name: {
		en: "Blaine's Doduo",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 84,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wild Kick",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Retaliate",
		},
		text: {
			en: "Does 10 damage times the number of damage counters on Blaine's Doduo.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
