import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [489],
	set: Set,

	name: {
		'en-us': "Phione",
		'fr-fr': "Phione",
		'es-es': "Phione",
		'it-it': "Phione",
		'pt-br': "Phione",
		'de-de': "Phione"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Sea Feast",
			'fr-fr': "Festin Océanique",
			'es-es': "Festín Marino",
			'it-it': "Festa del Mare",
			'pt-br': "Banquete Marinho",
			'de-de': "Meeresschmaus"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Basic Water Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon Water de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon Water Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon Base Water e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 Pokémon Water Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Water-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Onda Borrifante",
			'de-de': "Wellenplatscher"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It drifts in warm seas. It always returns to where it was born, no matter how far it may have drifted.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682092,
				tcgplayer: 451687
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682092,
				tcgplayer: 451687
			}
		},
	],
}

export default card
