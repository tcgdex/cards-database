import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-24",
	localId: 24,

	// Card informations
	name: {
		en: "Torkoal V",
	},

	hp: 210,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/24/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/24/high.png",
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
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Combustion Pillar",
		},
		text: {
			en: "Discard the top card of your deck. If that card is a Fire Energy card, this attack does 90 more damage.",
		},
		damage: "90+"
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Steam Crush",
		},
		text: {
			en: "Discard 2 Energy from your opponent’s Active Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

