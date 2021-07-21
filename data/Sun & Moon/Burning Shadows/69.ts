import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
		es: "Solrock",
		it: "Solrock",
		pt: "Solrock",
		de: "Sonnfel"
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
				en: "Double Draw",
				fr: "Double Pioche",
				es: "Roba Doble",
				it: "Pescata Doppia",
				pt: "Compra Dupla",
				de: "Zweifachzug"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				es: "Roba 2 cartas.",
				it: "Pesca due carte.",
				pt: "Compre 2 cartas.",
				de: "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Solar Heat",
				fr: "Chaleur Solaire",
				es: "Calor Solar",
				it: "Calura Solare",
				pt: "Calor Solar",
				de: "Solarhitze"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 20 more damage.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 20 puntos de daño más.",
				it: "Se c’è in gioco una carta Stadio, questo attacco infligge 20 danni in più.",
				pt: "Se houver alguma carta de Estádio em jogo, este ataque causará 20 pontos de dano a mais.",
				de: "Wenn mindestens 1 Stadionkarte im Spiel ist, fügt diese Attacke 20 Schadenspunkte mehr zu."
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



}

export default card
