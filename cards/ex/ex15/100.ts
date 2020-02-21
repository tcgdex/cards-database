import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-100",
	localId: 100,

	// Card informations
	name: {
		en: "Charizard Star δ",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/100/high",
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
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Rotating Claws",
		},
		text: {
			en: "You may discard an Energy card attached to Charizard Star. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Charizard Star.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Swirl",
		},
		text: {
			en: "Discard all Energy cards attached to Charizard Star and discard the top 3 cards from your opponent's deck.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
