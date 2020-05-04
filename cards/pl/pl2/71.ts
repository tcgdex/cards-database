import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-71",
	localId: 71,

	// Card informations
	name: {
		en: "Nidoran♀",
		fr: "Nidoran♀ Niv. 14",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 29,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/71/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/71/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Offer Help",
			fr: "Offrir de l'aide",
		},
		text: {
			en: "Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte Supporter, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
