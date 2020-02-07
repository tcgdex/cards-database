import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-120",
	localId: 120,

	// Card informations
	name: {
		en: "Sableye V",
	},

	hp: 170,

	type: [
		Type.DARKNESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/120/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/120/high.png",
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
			Type.DARKNESS
		],
		name: {
			en: "Lode Search",
		},
		text: {
			en: "Put a Trainer card from your discard pile into your hand.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Crazy Claws",
		},
		text: {
			en: "This attack does 60 more damage for each damage counter on your opponent’s Active Pokémon.",
		},
		damage: "10+"
	}],

	weaknesses: [{
		type: Type.GRASS,
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

