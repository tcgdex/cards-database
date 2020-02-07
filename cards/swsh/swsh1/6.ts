import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Whimsicott",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/6/high.png",
		},
	},

	evolveFrom: {
		en: "Cottonee",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cotton Ride",
		},
		text: {
			en: "Flip a coin. If heads, your opponent shuffles their Active Pokémon and all attached cards into their deck.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leaf Step",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

