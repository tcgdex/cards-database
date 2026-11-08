import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari Niv. 18",
		'de-de': "Sterndu"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [120],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cosmic Draw",
				'fr-fr': "Pioche cosmik",
				'de-de': "Kosmische Anziehungskraft"
			},
			effect: {
				'en-us': "If your opponent has any Evolved Pokémon in play, draw 3 cards.",
				'fr-fr': "Si votre adversaire possède des Pokémon Évolués en jeu, piochez 3 cartes.",
				'de-de': "Wenn dein Gegner mindestens 1 entwickeltes Pokémon im Spiel hat, ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
				'de-de': "Sternschauer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				'de-de': "Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "If its body is torn, it can grow back if the red core remains. The core flashes at midnight."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278657,
				tcgplayer: 89551
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278657,
				tcgplayer: 89551
			}
		},
	],

}

export default card
