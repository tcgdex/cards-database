import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
		de: "Sonnfel"
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
				en: "Luna Shade",
				fr: "Ombre lunaire",
				de: "Mondschatten"
			},
			effect: {
				en: "As long as you have Lunatone in play, each player's Colorless Pokémon (excluding Pokémon-ex) can't use any Poké-Powers.",
				fr: "Tant que votre Seleroc est en jeu, les Pokémon  de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Powers.",
				de: "Solange du Lunastein im Spiel hast, können die -Pokémon aller Spieler (außer Pokémon-ex) keine Poké-Power benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for a Lunatone and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez un Seleroc dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach Lunastein und lege es auf die Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
				de: "Hyperstahl"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte von dem Verteidigendem Pokémon auf den Ablagestapel deines Gegners."
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
