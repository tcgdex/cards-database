import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-55",
	localId: 55,

	// Card informations
	name: {
		en: "Natu δ",
	},

	hp: 40,

	type: [
		Type.DARKNESS,
	],

	dexId: 177,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Flop",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
