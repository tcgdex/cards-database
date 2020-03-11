import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-95",
	localId: 95,

	// Card informations
	name: {
		en: "Latias ex δ",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 991,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fellow Boost",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a basic Energy card from your hand to your Latias, Latias ex, Latios or Latios ex. If you do, your turn ends. This power can't be used if Latias ex is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Power Crush",
		},
		text: {
			en: "If the Defending Pokémon is Knocked Out by this attack, discard 2 Fire Energy attached to Latias ex.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
