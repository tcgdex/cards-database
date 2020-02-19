import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-24",
	localId: 24,

	// Card informations
	name: {
		en: "Corphish",
		fr: "Écrapince",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 341,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/24/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/24/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/24/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/24/high.png",
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
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Crabhammer",
			fr: "Pince-Masse",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

