import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-96",
	localId: 96,

	// Card informations
	name: {
		en: "Squirtle",
		fr: "Carapuce",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 7,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/96/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/96/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/96/high",
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
			en: "Skull Bash",
			fr: "Coud'krane",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
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
		name: "Platinum",
		code: "pl1"
	}
}

export default card
