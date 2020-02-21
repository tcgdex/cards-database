import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-17",
	localId: 17,

	// Card informations
	name: {
		en: "Omanyte",
		fr: "Amonita",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 138,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/17/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/17/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
