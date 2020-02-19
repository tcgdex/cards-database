import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H20",
	localId: "H20",

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
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H20/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

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

