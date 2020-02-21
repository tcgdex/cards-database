import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-55",
	localId: 55,

	// Card informations
	name: {
		en: "Mew",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Super Psywave",
		},
		text: {
			en: "Choose one of you opponent's Pokémon. Count the number of Energy cards attached to that Pokémon. Put that many damage counters on the Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
