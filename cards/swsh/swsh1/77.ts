import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-77",
	localId: 77,

	// Card informations
	name: {
		en: "Pincurchin",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/77/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Shocking Needles",
		},
		text: {
			en: "Flip 4 coins. This attack does 30 damage for each heads. If at least 2 of them are heads, your opponent's Active Pokémon is now Paralyzed.",
		},
		damage: "30×"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

