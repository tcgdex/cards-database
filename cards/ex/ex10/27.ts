import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-27",
	localId: 27,

	// Card informations
	name: {
		en: "Ho-Oh",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sacred Fire",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
