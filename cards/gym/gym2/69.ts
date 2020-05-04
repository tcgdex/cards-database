import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-69",
	localId: 69,

	// Card informations
	name: {
		en: "Erika's Jigglypuff",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 39,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/69/high",
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
			en: "Group Therapy",
		},
		text: {
			en: "You and your opponent remove 1 damage counter from each of your Pokémon with damage counters on them.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pulled Punch",
		},
		text: {
			en: "If the Defending Pokémon has no damage counters on it, this attack does 40 damage. If it has any damage counters on it, this attack does 10 damage.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
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
