import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-61",
	localId: 61,

	// Card informations
	name: {
		en: "Drednaw",
	},

	hp: 130,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/61/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/61/high.png",
		},
	},

	evolveFrom: {
		en: "Chewtle",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vise Bite",
		},
		text: {
			en: "This attack does 30 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
		},
		damage: "60+"
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jaw Lock",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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

