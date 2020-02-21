import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-23",
	localId: 23,

	// Card informations
	name: {
		en: "Squirtle",
		fr: "Carapuce",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 7,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/23/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/23/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 92,
		name: "HYOGONOSUKE"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
