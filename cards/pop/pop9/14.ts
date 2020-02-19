import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop9-14",
	localId: 14,

	// Card informations
	name: {
		en: "Gible",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 443,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop9/14/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop9/14/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 47,
		name: "Hiroki Fuchino"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Push Down",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+10"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "POP Series 9",
		code: "pop9"
	}
}

export default card

