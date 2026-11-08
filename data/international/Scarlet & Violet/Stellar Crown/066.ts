import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [926],
	set: Set,

	name: {
		'en-us': "Fidough",
		'fr-fr': "Pâtachiot",
		'es-es': "Fidough",
		'it-it': "Fidough",
		'pt-br': "Fidough",
		'de-de': "Hefel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Pleasant Aroma",
			'fr-fr': "Arôme Plaisant",
			'es-es': "Aroma Placentero",
			'it-it': "Fragranza Piacevole",
			'pt-br': "Aroma Agradável",
			'de-de': "Angenehmes Aroma"
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
		cost: ["Colorless"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785920,
				tcgplayer: 567292
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785920,
				tcgplayer: 567292
			}
		},
	],

	illustrator: "Narumi Sato",

}

export default card
