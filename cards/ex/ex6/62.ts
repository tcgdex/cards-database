import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-62",
	localId: 62,

	// Card informations
	name: {
		en: "Doduo",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 84,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Run Around",
		},
		text: {
			en: "Switch Doduo with 1 of your Benched Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Random Peck",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage plus 10 more damage for each heads.",
		},
		damage: 10
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
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
