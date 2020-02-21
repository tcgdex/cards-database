import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-58",
	localId: 58,

	// Card informations
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 50,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/58/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/58/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Mine",
			fr: "Mine",
		},
		text: {
			en: "Look at the top card of your opponent's deck. Then, you may have your opponent shuffle his or her deck.",
			fr: "Regardez la carte du dessus du deck de votre adversaire. Ensuite, vous pouvez demander à votre adversaire de mélanger son deck.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
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
		name: "XY",
		code: "xy1"
	}
}

export default card
