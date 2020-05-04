import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY126",
	localId: "XY126",

	// Card informations
	name: {
		en: "Mew-EX",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY126/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",

	abilities: [{
		id: 161,
		type: AbilityType.TALENT,
		name: {
			en: "Versatile",
		},
		text: {
			en: "This Pokémon can use the attacks of any Pokémon in play (both yours and your opponent's). (You still need the necessary Energy to use each attack.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Replace",
		},
		text: {
			en: "Move as many Energy attached to your Pokémon to your other Pokémon in any way you like.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
