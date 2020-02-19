import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-61",
	localId: 61,

	// Card informations
	name: {
		en: "Team Magma's Baltoy",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 343,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/61/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/61/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 159,
		name: "Atsuko Ujiie"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Night Attack",
		},
		text: {
			en: "Put 1 damage counter on 1 of your opponent's Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card

