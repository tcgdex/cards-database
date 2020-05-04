import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-107",
	localId: 107,

	// Card informations
	name: {
		en: "Misdreavus",
		fr: "Feuforeve",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 200,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/107/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/107/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		name: {
			en: "Show Off",
			fr: "Crâneur",
		},
		text: {
			en: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Payback",
			fr: "Représailles",
		},
		text: {
			en: "If your opponent has only 1 Prize card left, this attack does 10 damage plus 20 more damage.",
			fr: "S'il ne reste à votre adversaire qu'1 carte Récompense, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
