import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-65",
	localId: 65,

	// Card informations
	name: {
		en: "Swablu δ",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 333,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/65/high",
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
			Type.WATER
		],
		name: {
			en: "Splash About",
		},
		text: {
			en: "If Swablu has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
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
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
