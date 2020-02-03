import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-68",
	localId: 68,

	// Card informations
	name: {
		en: "Lileep δ",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 345,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/68/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/68/high.png",
		},
	},

	evolveFrom: {
		en: "Root Fossil",
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
			Type.DARKNESS
		],
		name: {
			en: "Poison Tentacles",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mud Shot",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card

