import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-118",
	localId: 118,

	// Card informations
	name: {
		en: "Galarian Linoone",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/118/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/118/high.png",
		},
	},

	evolveFrom: {
		en: "Galarian Zigzagoon",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Night Slash",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
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

