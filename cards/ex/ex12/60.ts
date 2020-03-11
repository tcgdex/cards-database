import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-60",
	localId: 60,

	// Card informations
	name: {
		en: "Omanyte",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 138,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/60/high",
		},
	},

	evolveFrom: {
		en: "Mysterious Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kenkichi Toyama",

	abilities: [{
		id: 254,
		type: AbilityType.POKEBODY,
		name: {
			en: "Ancient Tentacles",
		},
		text: {
			en: "Damage done to your opponent's Pokémon by your Omanyte, Omastar, Kabuto, Kabutops, or Kabutops ex isn't affected by Resistance.",
		}
	}],

	attacks: [{
		name: {
			en: "[Poké-Body] Ancient Tentacles",
		},
		text: {
			en: "Damage done to your opponent's Pokémon by your Omanyte, Omastar, Kabuto, Kabutops, or Kabutops ex isn't affected by Resistance.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Rising Lunge",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
