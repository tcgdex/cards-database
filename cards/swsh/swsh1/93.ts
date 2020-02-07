import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-93",
	localId: 93,

	// Card informations
	name: {
		en: "Dugtrio",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/93/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/93/high.png",
		},
	},

	evolveFrom: {
		en: "Diglett",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Mud Bomb",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

