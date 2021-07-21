import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Heracross",
		fr: "Scarhino",
		es: "Heracross",
		it: "Heracross",
		pt: "Heracross",
		de: "Skaraborn"
	},
	illustrator: "Satoshi Shirai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		214,
	],
	hp: 130,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Lunge Out",
				fr: "Allonger",
				es: "Arremeter",
				it: "Affondo Lungo",
				pt: "Bote",
				de: "Sprungangriff"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Riled Horn",
				fr: "Corne Irritée",
				es: "Cuerno Enfurecido",
				it: "Corna Rabbiose",
				pt: "Chifre Raivoso",
				de: "Wuthorn"
			},
			effect: {
				en: "If your opponent has any TAG TEAM Pokémon in play, this attack does 70 more damage.",
				fr: "Si votre adversaire a au moins un Pokémon ESCOUADE en jeu, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si tu rival tiene algún Pokémon de equipo de RELEVOS en juego, este ataque hace 70 puntos de daño más.",
				it: "Se il tuo avversario ha dei Pokémon ALLEATI in gioco, questo attacco infligge 70 danni in più.",
				pt: "Se o seu oponente tiver algum Pokémon ALIADOS em jogo, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn dein Gegner mindestens 1 TAG TEAM Pokémon im Spiel hat, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
