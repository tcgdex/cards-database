import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-99",
	localId: 99,

	// Card informations
	name: {
		en: "Alakazam Star",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 65,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psychic Select",
		},
		text: {
			en: "Put any 1 card from your discard pile into your hand.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Skill Copy",
		},
		text: {
			en: "Discard a Basic Pokémon or Evolution card from your hand. Choose 1 of that card's attacks. Skill Copy copies that attack. This attack does nothing if Alakazam Star doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Alakazam Star performs that attack.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
