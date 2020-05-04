import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-3",
	localId: 3,

	// Card informations
	name: {
		en: "Heracross δ",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 214,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 61,
		type: AbilityType.POKEBODY,
		name: {
			en: "Shining Horn",
		},
		text: {
			en: "As long as Heracross is the only Pokémon you have in play, your opponent's Basic Pokémon can't attack.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dig Deep",
		},
		text: {
			en: "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Extra Claws",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 20 more damage.",
		},
		damage: 30
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
