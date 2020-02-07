import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-28",
	localId: 28,

	// Card informations
	name: {
		en: "Salazzle",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/28/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/28/high.png",
		},
	},

	evolveFrom: {
		en: "Salandit",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Searing Flame",
		},
		text: {
			en: "Your opponent’s Active Pokémon is now Burned.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Bright Flame",
		},
		text: {
			en: "Discard 2 Energy from this Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

