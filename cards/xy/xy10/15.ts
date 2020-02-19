import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-15",
	localId: 15,

	// Card informations
	name: {
		en: "Seel",
		fr: "Otaria",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 86,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/15/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/15/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/15/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Icy Snow",
			fr: "Verglas",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

