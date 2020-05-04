import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-46",
	localId: 46,

	// Card informations
	name: {
		en: "Ponyta",
	},

	hp: 40,

	type: [
		Type.FIRE,
	],

	dexId: 77,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ascension",
		},
		text: {
			en: "Search your deck for a card that evolves from Ponyta and put it onto Ponyta. (This counts as evolving Ponyta.) Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
