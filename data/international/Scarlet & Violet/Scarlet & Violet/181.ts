import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nest Ball",
		'fr-fr': "Faiblo Ball",
		'es-es': "Nido Ball",
		'it-it': "Minor Ball",
		'pt-br': "Bola de Ninho",
		'de-de': "Nestball"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Toyste Beach",

	thirdParty: {
        cardmarket: 702477,
        tcgplayer: 488087
    }
}

export default card