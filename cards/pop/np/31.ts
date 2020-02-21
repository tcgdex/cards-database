import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "np-31",
	localId: 31,

	// Card informations
	name: {
		en: "Moltres ex",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 146,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/31/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 42,
		name: "Ken Ikuji"
	},

	abilities: [{
		id: 1108,
		type: AbilityType.POKEBODY,
		name: {
			en: "Synchronized Lift",
		},
		text: {
			en: "As long as you have Articuno ex and Zapdos ex in play, the Retreat Cost for Moltres ex is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flame Gift",
		},
		text: {
			en: "You may move a Fire Energy card attached to Moltres ex to 1 of your Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Scorching Wing",
		},
		text: {
			en: "Discard all Fire Energy attached to Moltres ex.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
