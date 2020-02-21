import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-55",
	localId: 55,

	// Card informations
	name: {
		en: "Chikorita",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 152,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 78,
		name: "Shin-ichi Yoshikawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Poisonpowder",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
