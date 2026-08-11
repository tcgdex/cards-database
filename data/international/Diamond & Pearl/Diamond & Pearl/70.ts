import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
		'de-de': "Bidiza"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		399,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Amnesia",
				'fr-fr': "Amnésie",
				'de-de': "Amnesie"
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
				'de-de': "Wähle 1 Angriff des Verteidigenden Pokémon. Dieses Pokémon kann den gewählten Angriff im nächsten Zug deines Gegners nicht einsetzen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scavenge",
				'fr-fr': "Farfouille",
				'de-de': "Aasfresser"
			},
			effect: {
				'en-us': "Search your discard pile for a Trainer card, show it to your opponent, and put it into your hand.",
				'fr-fr': "Choisissez une carte Dresseur dans votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main.",
				'de-de': "Durchsuche deinen Ablagestapel nach einer Trainerkarte, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "With nerves of steel, nothing can perturb it. It is more agile and active than it appears.",
		'fr-fr': "Rien ne peut perturber ses nerfs d'acier. Il est plus agile et énergique qu'il n'y paraît."
	},

	thirdParty: {
		cardmarket: 277569,
		tcgplayer: 83824
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
