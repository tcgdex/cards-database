import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-9",
	localId: 9,

	// Card informations
	name: {
		en: "Rayquaza",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/9/high",
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
			en: "Dragon Dance",
		},
		text: {
			en: "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, the attack does 30 more damage (before applying Weakness and Resistance).",
		},
	},{
		cost: [
			Type.FIRE,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
