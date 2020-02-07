import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-39",
	localId: 39,

	// Card informations
	name: {
		en: "Centiskorch",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/39/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/39/high.png",
		},
	},

	evolveFrom: {
		en: "Sizzlipede",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Hundred Foot Flames",
		},
		text: {
			en: "For each Fire Energy attached to this Pokémon, discard the top card of your opponent’s deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Searing Flame",
		},
		text: {
			en: "Your opponent’s Active Pokémon is now Burned.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

