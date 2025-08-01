import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Remoraid",
		fr: "Rémoraid",
		es: "Remoraid",
		it: "Remoraid",
		pt: "Remoraid",
		de: "Remoraid"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		223,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ion Pool",
				fr: "Bassin Ionique",
				es: "Piscina Iónica",
				it: "Vasca Ionizzata",
				pt: "Piscina de Íons",
				de: "Ionenbecken"
			},
			effect: {
				en: "Discard any Stadium card in play.",
				fr: "Défaussez toute carte Stade en jeu.",
				es: "Descarta cualquier carta de Estadio en juego.",
				it: "Scarta una carta Stadio in gioco.",
				pt: "Descarte qualquer card de Estádio em jogo.",
				de: "Lege eine beliebige Stadionkarte im Spiel auf den Ablagestapel."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				it: "Pistolacqua",
				pt: "Revólver d'Água",
				de: "Aquaknarre"
			},

			damage: 20,

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
		cardmarket: 286277
	}
}

export default card
