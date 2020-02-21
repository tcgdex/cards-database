import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-65",
	localId: 65,

	// Card informations
	name: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 111,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/65/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/65/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 146,
		name: "miki kudo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lunge Out",
			fr: "Allonger",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Horn Drill",
			fr: "Empal’Korne",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
