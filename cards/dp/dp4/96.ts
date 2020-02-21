import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-96",
	localId: 96,

	// Card informations
	name: {
		en: "Zigzagoon",
		fr: "Zigzaton",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 263,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/96/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/96/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pull Out",
			fr: "Déraciner",
		},
		text: {
			en: "Search your discard pile for any 1 card, show it to your opponent, and put it on top of your deck.",
			fr: "Choisissez n'importe quelle carte dans votre pile de défausse, montrez-la à votre adversaire et placez-la au dessus de votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Stab",
			fr: "Coup double",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
