import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-13",
	localId: 13,

	// Card informations
	name: {
		en: "Bellsprout",
		fr: "Chétiflor",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 69,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/13/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/13/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch’Herbe",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
