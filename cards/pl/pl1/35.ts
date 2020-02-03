import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pl/pl1/35/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/35/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/35/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

