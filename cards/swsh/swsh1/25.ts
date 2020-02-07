import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-25",
	localId: 25,

	// Card informations
	name: {
		en: "Victini V",
	},

	hp: 190,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/25/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/25/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],





	attacks: [{
		name: {
			en: "V rule",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spreading Flames",
		},
		text: {
			en: "Attach up to 3 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Energy Burst",
		},
		text: {
			en: "This attack does 30 damage for each Energy attached to both Active Pokémon.",
		},
		damage: "30×"
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

