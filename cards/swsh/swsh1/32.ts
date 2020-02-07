import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-32",
	localId: 32,

	// Card informations
	name: {
		en: "Raboot",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/32/high.png",
		},
	},

	evolveFrom: {
		en: "Scorbunny",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flame Charge",
		},
		text: {
			en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Magnum Kick",
		},
		damage: 70
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

