import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [492],

	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'es-es': "Shaymin",
		'es-mx': "Shaymin",
		'de-de': "Shaymin",
		'it-it': "Shaymin",
		'pt-br': "Shaymin"
	},

	illustrator: "saino misaki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Send Flowers",
			'fr-fr': "Envoi de Fleurs",
			'es-es': "Enviar Flores",
			'es-mx': "Enviar Flores",
			'de-de': "Blumen schicken",
			'it-it': "Mandafiori",
			'pt-br': "Mandar Flores"
		},

		effect: {
			'en-us': "Search your deck for an Energy card and attach it to 1 of your Benched {G} Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie, puis attachez-la à l'un de vos Pokémon {G} de Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía y únela a uno de tus Pokémon {G} en Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta de Energía y únela a 1 de tus Pokémon {G} en Banca. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach 1 Energiekarte und lege sie an 1 {G}-Pokémon auf deiner Bank an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Energia e assegnala a uno dei Pokémon {G} nella tua panchina. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por uma carta de Energia no seu baralho e ligue-a a 1 dos seus Pokémon {G} no Banco. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Leaf Step",
			'fr-fr': "Enjambée de Feuillage",
			'es-es': "Paso Hoja",
			'es-mx': "Paso de Hoja",
			'de-de': "Blattschritt",
			'it-it': "Passofoglia",
			'pt-br': "Passo de Folha"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684399,
				cardmarket: 877415
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684399,
				cardmarket: 877415
			}
		}
	],

}

export default card
