import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-SH11",
	localId: "SH11",

	// Card informations
	name: {
		en: "Ponyta",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 77,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/SH11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/SH11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",

	abilities: [{
		id: 315,
		type: AbilityType.POKEBODY,
		name: {
			en: "Star Barrier",
		},
		text: {
			en: "As long as Ponyta has any Energy attached to it, Ponyta has no Weakness.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Blue Fire",
		},
		text: {
			en: "Discard all Fire Energy attached to Ponyta.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
