import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop3-15",
	localId: 15,

	// Card informations
	name: {
		en: "Marshtomp",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 259,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop3/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop3/15/high.png",
		},
	},

	evolveFrom: {
		en: "Mudkip",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Mud Slap",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-edge",
		},
		text: {
			en: "Marshtomp does 10 damage to itself.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "POP Series 3",
		code: "pop3"
	}
}

export default card

