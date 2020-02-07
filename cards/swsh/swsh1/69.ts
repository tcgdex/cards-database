import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-69",
	localId: 69,

	// Card informations
	name: {
		en: "Lanturn",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/69/high.png",
		},
	},

	evolveFrom: {
		en: "Chinchou",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ram",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strobe Shock",
		},
		text: {
			en: "Your opponent reveals their hand. If you find any Energy cards there, your opponent’s Active Pokémon is now Paralyzed.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

