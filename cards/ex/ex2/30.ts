import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-30",
	localId: 30,

	// Card informations
	name: {
		en: "Azumarill",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 184,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/30/high",
		},
	},

	evolveFrom: {
		en: "Marill",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Drizzle",
		},
		text: {
			en: "If you have Water Energy cards in your hand, attach as many Water Energy cards as you like to any of your Active Pokémon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Max Bubbles",
		},
		text: {
			en: "Flip a coin for each Energy attached to all of your Active Pokémon. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
