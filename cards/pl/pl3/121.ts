import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-121",
	localId: 121,

	// Card informations
	name: {
		en: "Piplup",
		fr: "Tiplouf",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 393,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/121/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/121/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/121/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras'face",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
