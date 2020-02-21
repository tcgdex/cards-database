import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-88",
	localId: 88,

	// Card informations
	name: {
		en: "Psyduck",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Dizziness",
		},
		text: {
			en: "Draw a card.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Gun",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Energy attached to Psyduck but not used to pay for this attack. You can't add more than 20 damage in this way.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
