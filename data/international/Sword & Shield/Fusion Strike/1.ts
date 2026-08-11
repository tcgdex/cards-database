import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
		'es-es': "Caterpie",
		'it-it': "Caterpie",
		'pt-br': "Caterpie",
		'de-de': "Raupy"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Mitsuhiro Arita",

	description: {
		'en-us': "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flock",
			'fr-fr': "Nuée",
			'de-de': "Ausschwärmen",
			'es-es': "Multitud",
			'pt-br': "Bando",
			'it-it': "Frotta"
		},

		effect: {
			'en-us': "Search your deck for a Caterpie and put it onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Chenipan, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Raupy und lege es auf deine Bank. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja 1 Caterpie y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por 1 Caterpie no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo un Caterpie e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'de-de': "Käferbiss",
			'es-es': "Picadura",
			'pt-br': "Picada",
			'it-it': "Coleomorso"
		},

		damage: 10
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582029,
				tcgplayer: 253069
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582029,
				tcgplayer: 253069
			}
		},
	],
}

export default card
