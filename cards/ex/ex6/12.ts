import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-12",
	localId: 12,

	// Card informations
	name: {
		en: "Raichu",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/12/high",
		},
	},

	evolveFrom: {
		en: "Pikachu",
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
			Type.COLORLESS
		],
		name: {
			en: "Recharge",
		},
		text: {
			en: "Search your deck for up to 2 Lightning Energy cards and attach them to Raichu. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Reflection",
		},
		text: {
			en: "You may move any number of Lightning Energy cards attached to Raichu to another of your Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
