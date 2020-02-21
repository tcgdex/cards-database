import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-42",
	localId: 42,

	// Card informations
	name: {
		en: "Joltik",
	},

	hp: 30,

	type: [
		Type.LIGHTNING,
	],

	dexId: 595,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/42/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Static Shock",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
