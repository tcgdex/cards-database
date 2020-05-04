import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-81",
	localId: 81,

	// Card informations
	name: {
		en: "Voltorb",
		fr: "Voltorb",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 100,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/81/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/81/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/81/high",
		},
	},

	evolveFrom: {
		fr: "Voltorbe",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Outlet",
			fr: "Exutoire",
		},
		text: {
			en: "Search your deck for a Lightning Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte Énergie Lightning, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Bouncing Ball",
			fr: "Balle rebondissante",
		},
		text: {
			en: "Flip a coin. If tails, Voltorb does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, Voltorbe s'inflige 10 dégâts.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
