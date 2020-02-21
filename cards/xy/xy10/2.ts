import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-2",
	localId: 2,

	// Card informations
	name: {
		en: "Burmy",
		fr: "Cheniti",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 412,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/2/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/2/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hang Down",
			fr: "Suspension",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
