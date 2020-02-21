import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-10",
	localId: 10,

	// Card informations
	name: {
		en: "Flareon",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/10/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
		},
		text: {
			en: "Discard 1 Energy card attached to Flareon in order to use this attack.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
