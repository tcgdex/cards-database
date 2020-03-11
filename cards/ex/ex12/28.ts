import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-28",
	localId: 28,

	// Card informations
	name: {
		en: "Wobbuffet",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 66,
		type: AbilityType.POKEBODY,
		name: {
			en: "Stages of Evolution",
		},
		text: {
			en: "As long as Wobbuffet is an Evolved Pokémon, your opponent pays Colorless more to retreat his or her Active Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Grind",
		},
		text: {
			en: "Does 10 damage times the amount of Energy attached to Wobbuffet.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Tag",
		},
		text: {
			en: "Put 7 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
