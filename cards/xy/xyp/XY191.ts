import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY191",
	localId: "XY191",

	// Card informations
	name: {
		en: "Keldeo",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 647,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY191/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY191/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 116,
		type: AbilityType.TALENT,
		name: {
			en: "Justified",
		},
		text: {
			en: "This Pokémon's attacks do 50 more damage to your opponent's Darkness Pokémon (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Sacred Sword",
		},
		text: {
			en: "This Pokémon can't use Sacred Sword during your next turn.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
