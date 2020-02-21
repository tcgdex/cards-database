import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-54",
	localId: 54,

	// Card informations
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/54/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/54/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/54/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Pika Ball",
			fr: "Pika Ball",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
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
