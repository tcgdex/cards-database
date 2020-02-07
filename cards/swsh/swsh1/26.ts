import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-26",
	localId: 26,

	// Card informations
	name: {
		en: "Heatmor",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/26/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/26/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
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
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fire Claws",
		},
		damage: 50
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

