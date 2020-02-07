import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-33",
	localId: 33,

	// Card informations
	name: {
		en: "Raboot",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/33/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/33/high.png",
		},
	},

	evolveFrom: {
		en: "Scorbunny",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Kick",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Heat Blast",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
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

