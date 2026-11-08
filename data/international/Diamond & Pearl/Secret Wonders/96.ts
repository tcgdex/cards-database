import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'de-de': "Natu"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		177,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bothering Wave",
				'fr-fr': "Vague inquiétante",
				'de-de': "Störende Welle"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing. If heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Bei \"Kopf\" lege eine am Verteidigenden Pokémon angelegte Energiekarte auf den Ablagestapel deines Gegners."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Future Sight",
				'fr-fr': "Prescience",
				'de-de': "Seher"
			},
			effect: {
				'en-us': "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
				'fr-fr': "Regardez les 5 cartes du dessus du deck de chaque joueur et replacez-les au dessus du deck de chaque joueur dans n'importe quel ordre.",
				'de-de': "Schau dir die obersten 5 Karten des Decks eines Spielers an und lege die Karten in beliebiger Reihenfolge auf das Deck dieses Spielers zurück."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It picks food from cactus plants, deftly avoiding buds and spines. It seems to skip about to move.",
	},

	thirdParty: {
		cardmarket: 277849,
		tcgplayer: 87686
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
