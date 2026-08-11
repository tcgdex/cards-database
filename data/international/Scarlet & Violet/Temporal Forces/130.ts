import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [300],
	set: Set,

	name: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'es-es': "Skitty",
		'it-it': "Skitty",
		'pt-br': "Skitty",
		'de-de': "Eneco"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

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
			'pt-br': "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It can't stop itself from chasing moving things, and it runs in a circle, chasing its own tail.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760760,
				tcgplayer: 542874
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760760,
				tcgplayer: 542874
			}
		},
	],

	illustrator: "Atsuko Nishida",

}

export default card