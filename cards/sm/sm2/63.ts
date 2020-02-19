import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-63",
	localId: 63,

	// Card informations
	name: {
		en: "Machop",
		fr: "Machoc",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 66,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/63/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/63/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/63/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/63/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Dynamic Chop",
			fr: "Coupe Dynamique",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

