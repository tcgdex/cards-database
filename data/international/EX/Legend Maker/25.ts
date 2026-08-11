import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Solrock",
		'fr-fr': "Solaroc",
		'de-de': "Sonnfel"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		338,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Luna Shade",
				'fr-fr': "Ombre lunaire",
				'de-de': "Mondschatten"
			},
			effect: {
				'en-us': "As long as you have Lunatone in play, each player's Colorless Pokémon (excluding Pokémon-ex) can't use any Poké-Powers.",
				'fr-fr': "Tant que votre Seleroc est en jeu, les Pokémon  de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Powers.",
				'de-de': "Solange du Lunastein im Spiel hast, können die -Pokémon aller Spieler (außer Pokémon-ex) keine Poké-Power benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for a Lunatone and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez un Seleroc dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach Lunastein und lege es auf die Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'de-de': "Hyperstahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte von dem Verteidigendem Pokémon auf den Ablagestapel deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276902,
		tcgplayer: 89427
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		},
		{
			type: "normal",
			stamp: ["miska-saari"]
		}
	]
}

export default card
