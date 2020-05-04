import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-23",
	localId: 23,

	// Card informations
	name: {
		en: "Tropius δ",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 357,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 109,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Tropical Heal",
		},
		text: {
			en: "Once during your turn, when you put Tropius from your hand onto your Bench, you may remove all Special Conditions, Imprison markers, and Shock-wave markers from your Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Grind",
		},
		text: {
			en: "Does 10 damage times the amount of Energy attached to Tropius.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
