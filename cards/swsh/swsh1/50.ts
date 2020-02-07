import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-50",
	localId: 50,

	// Card informations
	name: {
		en: "Lapras VMAX",
	},

	hp: 320,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/50/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/50/high.png",
		},
	},

	evolveFrom: {
		en: "Lapras V",
	},

	tags: [
		Tag.VMAX,
	],





	attacks: [{
		name: {
			en: "VMAX rule",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "G-Max Pump",
		},
		text: {
			en: "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
		},
		damage: "90+"
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareVMAX,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

