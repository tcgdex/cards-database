import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-68",
	localId: 68,

	// Card informations
	name: {
		en: "Bulbasaur",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 1,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Leech Seed",
		},
		text: {
			en: "Unless all damage from this attack is prevented, you may remove 1 damage counter from Bulbasaur.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
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
