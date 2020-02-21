import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-SH6",
	localId: "SH6",

	// Card informations
	name: {
		en: "Vulpix",
		fr: "Goupix",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 37,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/SH6/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/SH6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/SH6/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/SH6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		name: {
			en: "Find Wildfire",
			fr: "Traqueur de feu de forêt",
		},
		text: {
			en: "Search your deck for up to 2 Fire Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Fire. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Brushfire",
			fr: "Feu de broussailles",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Benched Grass Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de Banc Grass de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Inflame",
			fr: "Mettre le feu",
		},
		text: {
			en: "Discard a Fire Energy card from your hand. (If you can't discard a card from your hand, this attack does nothing.)",
			fr: "Défaussez une carte Énergie Fire de votre main. (Si vous ne pouvez pas défausser de carte de votre main, cette attaque est sans effet.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
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
