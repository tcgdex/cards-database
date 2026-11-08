import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Lunatone",
		'fr-fr': "Seleroc",
		'de-de': "Lunastein"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		337,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sol Shade",
				'fr-fr': "Sol-ombre",
				'de-de': "Sonnenschatten"
			},
			effect: {
				'en-us': "As long as you have Solrock in play, each player's Fire Pokémon (excluding Pokémon-ex) can't use any Poké-Powers.",
				'fr-fr': "Tant que votre Solaroc est en jeu, les Pokémon  de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Powers.",
				'de-de': "Solange du Sonnfel im Spiel hast, können die -Pokémon beider Spieler (außer Pokémon-ex) keine Poké-Power benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Moon Guidance",
				'fr-fr': "Guide lunaire",
				'de-de': "Mondführung"
			},
			effect: {
				'en-us': "Search your deck for a Trainer card (excluding Supporter cards), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Dresseur (cartes Supporter exclues), montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Trainerkarte (keine Unterstützerkarte), zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psyshock",
				'fr-fr': "Choc psy",
				'de-de': "Psychoschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276897,
		tcgplayer: 86925
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
			stamp: ["miska-saari"]
		}
	]
}

export default card
