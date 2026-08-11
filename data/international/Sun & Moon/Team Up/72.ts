import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'es-es': "Primeape",
		'it-it': "Primeape",
		'pt-br': "Primeape",
		'de-de': "Rasaff"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
				'es-es': "Patada Baja",
				'it-it': "Colpo Basso",
				'pt-br': "Rasteira",
				'de-de': "Fußkick"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wreck",
				'fr-fr': "Anéantissement",
				'es-es': "Naufragio",
				'it-it': "Demolitore",
				'pt-br': "Destruir",
				'de-de': "Abreißen"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 80 more damage. Then, discard that Stadium card.",
				'fr-fr': "S’il y a une carte Stade en jeu, cette attaque inflige 80 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 80 puntos de daño más. Después, descarta esa carta de Estadio.",
				'it-it': "Se c’è in gioco una carta Stadio, questo attacco infligge 80 danni in più. Poi scarta quella carta Stadio.",
				'pt-br': "Se houver alguma carta de Estádio em jogo, este ataque causará 80 pontos de dano a mais. Em seguida, descarte aquela carta de Estádio.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 80 Schadenspunkte mehr zu. Lege anschließend jene Stadionkarte auf den Ablagestapel."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It will never forgive opponents who have angered it. Even after it has beaten them down until they can't move, it never ever forgives.",
	},

	thirdParty: {
		cardmarket: 369002,
		tcgplayer: 183850
	}
}

export default card
