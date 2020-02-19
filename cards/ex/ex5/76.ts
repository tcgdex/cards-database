import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-76",
	localId: 76,

	// Card informations
	name: {
		en: "Surskit",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 283,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/76/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Splash About",
		},
		text: {
			en: "If Surskit has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card

