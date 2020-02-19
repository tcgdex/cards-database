import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-3",
	localId: 3,

	// Card informations
	name: {
		en: "Mew (Delta Species)",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/3/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Copy",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Mew doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Mew performs that attack.",
		},
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Extra Draw",
		},
		text: {
			en: "If your opponent has any Pokémon-ex in play, search your deck for up to 2 basic Energy cards and attach them to Mew. Shuffle your deck afterward.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card

