import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-53",
	localId: 53,

	// Card informations
	name: {
		en: "Geodude",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 74,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/53/high",
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
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Selfdestruct",
		},
		text: {
			en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.) Geodude does 50 damage to itself.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
