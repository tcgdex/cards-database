import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-76",
	localId: 76,

	// Card informations
	name: {
		en: "Taillow",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 276,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
