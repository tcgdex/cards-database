import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-7",
	localId: 7,

	// Card informations
	name: {
		en: "Ludicolo",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 272,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/7/high",
		},
	},

	evolveFrom: {
		en: "Lombre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Tomokazu Komiya",

	abilities: [{
		id: 264,
		type: AbilityType.POKEBODY,
		name: {
			en: "Rain Dish",
		},
		text: {
			en: "At any time between turns, remove 1 damage counter from Ludicolo.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Punch",
		},
		text: {
			en: "Does 50 damage plus 10 more damage for each Water Energy attached to Ludicolo but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
