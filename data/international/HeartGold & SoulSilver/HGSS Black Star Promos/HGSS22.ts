import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon"
	},
	illustrator: "TOKIYA",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [137],
	hp: 50,
	types: [
		"Colorless"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stiffen",
				'fr-fr': "Raidir"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Porygon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à Porygon par des attaques pendant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Version Update",
				'fr-fr': "Mise à jour de version"
			},
			effect: {
				'en-us': "Search your deck for Porygon2, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez Porygon2 dans votre deck, montrez-le à votre adversaire et ajoutez-le à votre main. Mélangez ensuite votre deck."
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It is a manmade Pokémon. Since it doesn't breathe, people are eager to try it in any environment.."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275604,
				tcgplayer: 88313
			}
		},
	],

}

export default card
