import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-56",
	localId: 56,

	// Card informations
	name: {
		en: "Blitzle",
		fr: "Zébibron",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 522,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/56/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/56/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
