import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-23",
	localId: 23,

	// Card informations
	name: {
		en: "Ninetales",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/23/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/23/high.png",
		},
	},

	evolveFrom: {
		en: "Vulpix",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flame Cloak",
		},
		text: {
			en: "Attach a Fire Energy card from your discard pile to this Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Mane",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
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

