import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-82",
	localId: 82,

	// Card informations
	name: {
		en: "Mareep",
		fr: "Wattouat",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 179,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/82/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/82/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		name: {
			en: "Minor Errand-Running",
			fr: "Rendez-vous mineur",
		},
		text: {
			en: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte Énergie de base. Montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Expand",
			fr: "Pousstoidla",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Mareep by attacks is reduced by 10 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Wattouat par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 10
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
