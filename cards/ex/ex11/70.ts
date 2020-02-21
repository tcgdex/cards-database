import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-70",
	localId: 70,

	// Card informations
	name: {
		en: "Holon's Magnemite",
	},

	hp: 40,

	type: [
		Type.METAL,
	],

	dexId: 81,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Linear Attack",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
