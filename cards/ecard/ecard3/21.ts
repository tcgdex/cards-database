import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-21",
	localId: 21,

	// Card informations
	name: {
		en: "Moltres",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 146,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 1310,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fire Immunity",
		},
		text: {
			en: "You can't attach Fire Energy cards from your hand to Moltres.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Collect Fire",
		},
		text: {
			en: "If there are any Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Moltres.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Burning Tail",
		},
		text: {
			en: "Flip a coin. If tails, discard a Energy card attached to Moltres.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
