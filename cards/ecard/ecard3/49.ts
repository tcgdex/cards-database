import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-49",
	localId: 49,

	// Card informations
	name: {
		en: "Delibird",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 225,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Limited Delivery",
		},
		text: {
			en: "Search your deck for a Technical Machine or Pokémon Tool card show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Kick Away",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. (Do the damage before switching Pokémon.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
