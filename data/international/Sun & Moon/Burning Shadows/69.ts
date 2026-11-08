import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Solrock",
		'fr-fr': "Solaroc",
		'es-es': "Solrock",
		'it-it': "Solrock",
		'pt-br': "Solrock",
		'de-de': "Sonnfel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		338,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Draw",
				'fr-fr': "Double Pioche",
				'es-es': "Roba Doble",
				'it-it': "Pescata Doppia",
				'pt-br': "Compra Dupla",
				'de-de': "Zweifachzug"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cartas.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Solar Heat",
				'fr-fr': "Chaleur Solaire",
				'es-es': "Calor Solar",
				'it-it': "Calura Solare",
				'pt-br': "Calor Solar",
				'de-de': "Solarhitze"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 20 more damage.",
				'fr-fr': "S’il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 20 puntos de daño más.",
				'it-it': "Se c’è in gioco una carta Stadio, questo attacco infligge 20 danni in più.",
				'pt-br': "Se houver alguma carta de Estádio em jogo, este ataque causará 20 pontos de dano a mais.",
				'de-de': "Wenn mindestens 1 Stadionkarte im Spiel ist, fügt diese Attacke 20 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Solar energy is the source of its power, so it is strong during the daytime. When it spins, its body shines.",
	},

	thirdParty: {
		cardmarket: 299471,
		tcgplayer: 138555
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
