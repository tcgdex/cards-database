import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "np-33",
	localId: 33,

	// Card informations
	name: {
		en: "Zapdos ex",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 145,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "K. Hoshiba",

	abilities: [{
		id: 1108,
		type: AbilityType.POKEBODY,
		name: {
			en: "Synchronized Lift",
		},
		text: {
			en: "As long as you have Articuno ex and Moltres ex in play, the Retreat Cost for Zapdos ex is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Thunder Gift",
		},
		text: {
			en: "You may move a Lightning Energy card attached to Zapdos ex to 1 of your Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Wing",
		},
		text: {
			en: "Does 10 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
