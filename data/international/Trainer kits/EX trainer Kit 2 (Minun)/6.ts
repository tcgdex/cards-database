import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	dexId: [312],
	set: Set,

	name: {
		'en-us': "Minun",
		'fr-fr': "Negapi"
	},

	illustrator: "Katsura Tabata",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 60,

	types: [
		"Lightning"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Drawup Power",
			'fr-fr': "Pouvoir bloquant"
		},
		effect: {
			'en-us': "Search your deck for an Energy card, show it to your opponent, and put into your hand. Shuffle your deck afterward.",
			'fr-fr': "Choisissez une carte Énergie dans votre deck, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck."
		}
	}, {
		cost: [
			"Lightning",
			"Colorless"
		],
		name: {
			'en-us': "Front Spark",
			'fr-fr': "Étincelle avant"
		},
		effect: {
			'en-us': "Does 10 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
		},
		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	retreat: 1,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 277203,
				tcgplayer: 87486
			}
		},
	],

}

export default card
