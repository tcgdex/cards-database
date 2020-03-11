import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-67",
	localId: 67,

	// Card informations
	name: {
		en: "Axew",
		fr: "Coupenotte",
	},

	hp: 50,

	type: [
		Type.DRAGON,
	],

	dexId: 610,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/67/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/67/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Strong Bond",
			fr: "Attachement Profond",
		},
		text: {
			en: "Search your deck for a Supporter card named Iris, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez une carte Supporter nommée Iris dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.METAL
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
