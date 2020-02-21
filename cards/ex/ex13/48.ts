import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-48",
	localId: 48,

	// Card informations
	name: {
		en: "Persian δ",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
		Type.METAL,
	],

	dexId: 53,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/48/high",
		},
	},

	evolveFrom: {
		en: "Meowth",
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
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Scratch and Draw",
		},
		text: {
			en: "If any Stadium card with Holon in its name is in play, draw 3 cards.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Deceive",
		},
		text: {
			en: "Your opponent chooses 1 of his or her Pokémon. Put 4 damage counters on that Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
