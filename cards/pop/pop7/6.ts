import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



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





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "POP Series 7",
		code: "pop7"
	}
}

export default card
