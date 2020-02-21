import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-41",
	localId: 41,

	// Card informations
	name: {
		en: "Aipom",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 190,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Grab",
		},
		text: {
			en: "Choose a Trainer card attached to 1 of your opponent's Pokémon. Your opponent shuffles that card into his or her deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Punch",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
