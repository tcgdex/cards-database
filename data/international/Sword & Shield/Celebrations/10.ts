import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Zekrom",
		'fr-fr': "Zekrom",
		'es-es': "Zekrom",
		'it-it': "Zekrom",
		'pt-br': "Zekrom",
		'de-de': "Zekrom"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "Aya Kusube",

	attacks: [{
		name: {
			'en-us': "Field Crush",
			'fr-fr': "Broyeur de Terrain",
			'es-es': "Arrasamiento de Campo",
			'it-it': "Invasione di Campo",
			'pt-br': "Esmagamento de Campo",
			'de-de': "Feldschlag"
		},

		effect: {
			'en-us': "If your opponent has a Stadium in play, discard it.",
			'fr-fr': "Si votre adversaire a un Stade en jeu, défaussez-le.",
			'es-es': "Si tu rival tiene un Estadio en juego, descártalo.",
			'it-it': "Se il tuo avversario ha una carta Stadio in gioco, scartala.",
			'pt-br': "Se o seu oponente tiver um Estádio em jogo, descarte-o.",
			'de-de': "Wenn dein Gegner eine Stadionkarte im Spiel hat, lege sie auf seinen Ablagestapel."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "White Thunder",
			'fr-fr': "Tonnerre Blanc",
			'es-es': "Trueno Blanco",
			'it-it': "Tuono Bianco",
			'pt-br': "Trovão Branco",
			'de-de': "Weißer Donner"
		},

		effect: {
			'en-us': "If Reshiram is on your Bench, this attack does 80 more damage.",
			'fr-fr': "Si Reshiram est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si Reshiram está en tu Banca, este ataque hace 80 puntos de daño más.",
			'it-it': "Se Reshiram è nella tua panchina, questo attacco infligge 80 danni in più.",
			'pt-br': "Se Reshiram estiver no seu Banco, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn sich Reshiram auf deiner Bank befindet, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	description: {
		'en-us': "Concealing itself in lightning clouds, it flies throughout the Unova region. It creates electricity in its tail."
	},

	dexId: [644],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576755,
				tcgplayer: 250308
			}
		},
	],
}

export default card
