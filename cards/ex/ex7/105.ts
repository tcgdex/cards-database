import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-105",
	localId: 105,

	// Card informations
	name: {
		en: "Rocket's Suicune ex",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 245,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 995,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dark and Clear",
		},
		text: {
			en: "As long as Rocket's Suicune ex has any Darkness Energy attached to it, Rocket's Suicune ex can't be affected by any Special Conditions.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Icy Wind",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Splash",
		},
		text: {
			en: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 50 damage plus 40 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
