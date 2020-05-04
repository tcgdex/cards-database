import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-49",
	localId: 49,

	// Card informations
	name: {
		en: "Grotle",
		fr: "Boskara",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 388,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/49/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/49/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/49/high",
		},
	},

	evolveFrom: {
		en: "Turtwig",
		fr: "Tortipouss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Absorb",
			fr: "Vol-vie",
		},
		text: {
			en: "Remove 1 damage counter from Grotle.",
			fr: "Retirez à Boskara 1 marqueur de dégât.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch'herbe",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
