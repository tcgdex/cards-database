import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-7",
	localId: 7,

	// Card informations
	name: {
		en: "Team Aqua's Grimer",
		fr: "Tadmorv de la Team Aqua",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 88,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/7/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/7/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
