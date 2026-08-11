import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [57],
	set: Set,

	name: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'es-es': "Primeape",
		'it-it': "Primeape",
		'pt-br': "Primeape",
		'de-de': "Rasaff"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'pt-br': "Mankey",
		'de-de': "Menki"
	},

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

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Steamin' Mad Strike",
			'fr-fr': "Poing Furibond",
			'es-es': "Golpe Enfurecimiento",
			'it-it': "Colpo Escandescenza",
			'pt-br': "Golpe Cabeça Quente",
			'de-de': "Kochender Wutangriff"
		},

		effect: {
			'en-us': "This attack does 50 damage for each of your Benched Pokémon that has any damage counters on it.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon de Banc ayant au moins un marqueur de dégâts.",
			'es-es': "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon en Banca que tenga algún contador de daño sobre él.",
			'it-it': "Questo attacco infligge 50 danni per ogni Pokémon nella tua panchina che ha dei segnalini danno.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon no Banco que tiver algum contador de dano nele.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank, auf dem mindestens 1 Schadensmarke liegt, 50 Schadenspunkte zu."
		},

		damage: "50×",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "The blood vessels in its brain are sturdier than those of other Pokémon, so it can stay healthy despite its constant raging."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545451,
				tcgplayer: 234243
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545451,
				tcgplayer: 234243
			}
		},
	],
}

export default card
