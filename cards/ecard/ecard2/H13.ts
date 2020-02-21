import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H13",
	localId: "H13",

	// Card informations
	name: {
		en: "Jumpluff",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 189,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H13/high",
		},
	},

	evolveFrom: {
		en: "Skiploom",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 202,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fluff",
		},
		text: {
			en: "During your opponent's turn, if Jumpluff would be damaged or affected by an opponent's attack and it already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack (including damage).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Cotton Punch",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
