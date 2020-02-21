import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-15",
	localId: 15,

	// Card informations
	name: {
		en: "Snorlax",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 143,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 135,
		type: AbilityType.POKEBODY,
		name: {
			en: "Rest Up",
		},
		text: {
			en: "If Snorlax remains Asleep between turns, remove 2 damage counters from Snorlax (remove 1 if there is only 1).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Collapse",
		},
		text: {
			en: "Snorlax is now asleep.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Toss and Turn",
		},
		text: {
			en: "If Snorlax is Asleep, this attack does 30 damage plus 30 more damage. (This attack can be used even if Snorlax is Asleep.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
