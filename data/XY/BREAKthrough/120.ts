import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Noctowl",
		fr: "Noarfang",
		es: "Noctowl",
		it: "Noctowl",
		pt: "Noctowl",
		de: "Noctuh"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		164,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Hoothoot",
		fr: "Hoothoot",
		es: "Hoothoot",
		it: "Hoothoot",
		pt: "Hoothoot",
		de: "Hoothoot"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "High Flight",
				fr: "Haute Voltige",
				es: "Alto Vuelo",
				it: "Altaquota",
				pt: "Voo Alto",
				de: "Hoher Flug"
			},
			effect: {
				en: "Each player reveals his or her hand. This attack does 20 damage times the number of Item cards revealed.",
				fr: "Chaque joueur montre sa main. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Objet montrées.",
				es: "Los jugadores enseñan las cartas de su mano. Este ataque hace 20 puntos de daño por el número de cartas de Objeto mostradas.",
				it: "Ciascun giocatore mostra le carte che ha in mano. Questo attacco infligge 20 danni per ogni carta Strumento mostrata.",
				pt: "Cada jogador revela a própria mão. Este ataque causa 20 de danos vezes o número de cards de Item revelados.",
				de: "Jeder Spieler deckt seine Handkarten auf. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der aufgedeckten Itemkarten zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Dive",
				fr: "Plongée Rapide",
				es: "Picado Rápido",
				it: "Immersione Rapida",
				pt: "Mergulho Veloz",
				de: "Tempohechtsprung"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
