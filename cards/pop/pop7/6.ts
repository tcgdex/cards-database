import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop7-6",
	localId: 6,

	// Card informations
	name: {
		en: "Delibird",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 225,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop7/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop7/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		name: {
			en: "Present",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Ice Ball",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+20"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "POP Series 7",
		code: "pop7"
	}
}

export default card
