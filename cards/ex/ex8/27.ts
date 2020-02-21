import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-27",
	localId: 27,

	// Card informations
	name: {
		en: "Tropius",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 357,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},

	abilities: [{
		id: 50,
		type: AbilityType.POKEBODY,
		name: {
			en: "Tropical Motion",
		},
		text: {
			en: "As long as Tropius is your Active Pokémon, your opponent's Pokémon have no Resistance.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Miracle Blow",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stomp",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
