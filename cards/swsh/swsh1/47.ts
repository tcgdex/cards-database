import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-47",
	localId: 47,

	// Card informations
	name: {
		en: "Seaking",
	},

	hp: 110,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/47/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/47/high.png",
		},
	},

	evolveFrom: {
		en: "Goldeen",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Ripping Horn",
		},
		text: {
			en: "Flip 3 coins. For each heads, discard an Energy from your opponent’s Active Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pierce",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

