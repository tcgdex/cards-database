import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-60",
	localId: 60,

	// Card informations
	name: {
		en: "Houndour",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 228,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",

	abilities: [{
		id: 306,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dark Lift",
		},
		text: {
			en: "If Houndour has any Fighting Energy attached to it, the Retreat Cost for Houndour is 0.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Firebreathing",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
