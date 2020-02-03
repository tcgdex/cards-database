import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-8",
	localId: 8,

	// Card informations
	name: {
		en: "Deerling",
		fr: "Vivaldaim",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 585,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/8/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/8/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/8/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Find a Friend",
			fr: "Trouver un Ami",
		},
		text: {
			en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

