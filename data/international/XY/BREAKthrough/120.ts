import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Noctowl",
		'fr-fr': "Noarfang",
		'es-es': "Noctowl",
		'it-it': "Noctowl",
		'pt-br': "Noctowl",
		'de-de': "Noctuh"
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
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot",
		'es-es': "Hoothoot",
		'it-it': "Hoothoot",
		'pt-br': "Hoothoot",
		'de-de': "Hoothoot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "High Flight",
				'fr-fr': "Haute Voltige",
				'es-es': "Alto Vuelo",
				'it-it': "Altaquota",
				'pt-br': "Voo Alto",
				'de-de': "Hoher Flug"
			},
			effect: {
				'en-us': "Each player reveals his or her hand. This attack does 20 damage times the number of Item cards revealed.",
				'fr-fr': "Chaque joueur montre sa main. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Objet montrées.",
				'es-es': "Los jugadores enseñan las cartas de su mano. Este ataque hace 20 puntos de daño por el número de cartas de Objeto mostradas.",
				'it-it': "Ciascun giocatore mostra le carte che ha in mano. Questo attacco infligge 20 danni per ogni carta Strumento mostrata.",
				'pt-br': "Cada jogador revela a própria mão. Este ataque causa 20 de danos vezes o número de cards de Item revelados.",
				'de-de': "Jeder Spieler deckt seine Handkarten auf. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der aufgedeckten Itemkarten zu."
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
				'en-us': "Speed Dive",
				'fr-fr': "Plongée Rapide",
				'es-es': "Picado Rápido",
				'it-it': "Immersione Rapida",
				'pt-br': "Mergulho Veloz",
				'de-de': "Tempohechtsprung"
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

	description: {
		'en-us': "When it needs to think, it rotates its head 180 degrees to sharpen its intellectual power.",
	},

	thirdParty: {
		cardmarket: 286366,
		tcgplayer: 107239
	}
}

export default card
