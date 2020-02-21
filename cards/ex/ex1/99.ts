import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-99",
	localId: 99,

	// Card informations
	name: {
		en: "Lapras ex",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 131,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Energy Ball",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to Lapras ex but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Confuse Ray",
		},
		text: {
			en: "The Defending Pokémon is now Confused",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
