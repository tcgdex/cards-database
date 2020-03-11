import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "kawayoo",



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
