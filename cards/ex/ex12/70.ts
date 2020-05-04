import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-70",
	localId: 70,

	// Card informations
	name: {
		en: "Wurmple",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 265,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",

	abilities: [{
		id: 585,
		type: AbilityType.POKEBODY,
		name: {
			en: "Poison Payback",
		},
		text: {
			en: "If Wurmple is your Active Pokémon and is damaged by an opponent's attack (even if Wurmple is Knocked Out), the Attacking Pokémon is now Poisoned.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "String Pull",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
