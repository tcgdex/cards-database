import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-49",
	localId: 49,

	// Card informations
	name: {
		en: "Lapras V",
	},

	hp: 210,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/49/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/49/high.png",
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
			en: "Body Surf",
		},
		text: {
			en: "Attach a Water Energy card from your hand to this Pokémon. If you do, switch it with 1 of your Benched Pokémon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ocean Loop",
		},
		text: {
			en: "Put 2 Water Energy attached to this Pokémon into your hand.",
		},
		damage: 210
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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

