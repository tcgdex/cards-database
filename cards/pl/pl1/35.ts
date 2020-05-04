import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-35",
	localId: 35,

	// Card informations
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 370,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/35/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/35/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/35/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {
			en: "Love Call",
			fr: "Appel amoureux",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. Search your deck for a Pokémon that is the same type as the Pokémon you chose, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Choisissez dans votre deck un Pokémon du même type que le Pokémon que vous avez choisi, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Sweet Kiss",
			fr: "Doux baiser",
		},
		text: {
			en: "Your opponent may draw a card.",
			fr: "Votre adversaire peut piocher une carte.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
