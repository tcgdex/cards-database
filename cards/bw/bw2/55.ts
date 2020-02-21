import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-55",
	localId: 55,

	// Card informations
	name: {
		en: "Drilbur",
		fr: "Rototaupe",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 529,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/55/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/55/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/55/high",
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
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
