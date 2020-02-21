import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-24",
	localId: 24,

	// Card informations
	name: {
		en: "Vibrava δ",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 329,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/24/high",
		},
	},

	evolveFrom: {
		en: "Trapinch",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},

	abilities: [{
		id: 960,
		type: AbilityType.POKEBODY,
		name: {
			en: "Psychic Wing",
		},
		text: {
			en: "If Vibrava has any Psychic Energy attached to it, the Retreat Cost for Vibrava is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Blow",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
