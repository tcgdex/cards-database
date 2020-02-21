import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-67",
	localId: 67,

	// Card informations
	name: {
		en: "Kabuto δ",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 140,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/67/high",
		},
	},

	evolveFrom: {
		en: "Mysterious Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Eerie Light",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shell Attack",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
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
