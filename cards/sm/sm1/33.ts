import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-33",
	localId: 33,

	// Card informations
	name: {
		en: "Shellder",
		fr: "Kokiyas",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 90,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/33/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/33/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/33/high",
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
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
