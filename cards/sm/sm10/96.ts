import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-96",
	localId: 96,

	// Card informations
	name: {
		en: "Wooper",
		fr: "Axoloto",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 194,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/96/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/96/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/96/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 61,
		name: "tetsuya koizumi"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Mud Bomb",
			fr: "Boue-Bombe",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
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

