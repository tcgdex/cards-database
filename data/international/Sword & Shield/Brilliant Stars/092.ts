import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [859],
	set: Set,

	name: {
		'en-us': "Impidimp",
		'fr-fr': "Grimalin",
		'es-es': "Impidimp",
		'it-it': "Impidimp",
		'pt-br': "Impidimp",
		'de-de': "Bähmon"
	},

	illustrator: "Rianti Hidayat",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille",
			'es-es': "Llamar a la Familia",
			'it-it': "Cerca Famiglia",
			'pt-br': "Chamar a Família",
			'de-de': "Familienruf"
		},

		effect: {
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Through its nose, it sucks in the emanations produced by people and Pokémon when they feel annoyed. It thrives off this negative energy.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608638,
				tcgplayer: 263810
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608638,
				tcgplayer: 263810
			}
		},
	],
}

export default card
