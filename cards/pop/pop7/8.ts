import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop7-8",
	localId: 8,

	// Card informations
	name: {
		en: "Kirlia",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 281,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop7/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop7/8/high",
		},
	},

	evolveFrom: {
		en: "Ralts",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psychic Research",
		},
		text: {
			en: "Search your discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your discard pile.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Telekinesis",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "POP Series 7",
		code: "pop7"
	}
}

export default card
