import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [590],
	set: Set,

	name: {
		'fr-fr': "Trompignon",
		'en-us': "Foongus",
		'es-es': "Foongus",
		'it-it': "Foongus",
		'pt-br': "Foongus",
		'de-de': "Tarnpignon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Motif Attirant",
			'en-us': "Enticing Pattern",
			'es-es': "Patrón Tentador",
			'it-it': "Motivo Allettante",
			'pt-br': "Padrão Atraente",
			'de-de': "Lockmuster"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck un Pokémon {G} de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for a Basic {G} Pokémon and put it onto your Bench. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja 1 Pokémon {G} Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Base {G} e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por um Pokémon {G} Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-{G}-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Bataille",
			'en-us': "Beat",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "There is a theory that the developer of the modern-day Poké Ball really liked Foongus, but this has not been confirmed.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725089,
				tcgplayer: 509665,
				cardtrader: 255569
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725089,
				tcgplayer: 509665,
				cardtrader: 255569
			}
		},
	],

	illustrator: "You Iribi",

	
}

export default card
