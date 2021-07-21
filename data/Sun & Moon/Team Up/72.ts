import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		it: "Primeape",
		pt: "Primeape",
		de: "Rasaff"
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
		en: "Mankey",
		fr: "Férosinge",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
				es: "Patada Baja",
				it: "Colpo Basso",
				pt: "Rasteira",
				de: "Fußkick"
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
				en: "Wreck",
				fr: "Anéantissement",
				es: "Naufragio",
				it: "Demolitore",
				pt: "Destruir",
				de: "Abreißen"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 80 more damage. Then, discard that Stadium card.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 80 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 80 puntos de daño más. Después, descarta esa carta de Estadio.",
				it: "Se c’è in gioco una carta Stadio, questo attacco infligge 80 danni in più. Poi scarta quella carta Stadio.",
				pt: "Se houver alguma carta de Estádio em jogo, este ataque causará 80 pontos de dano a mais. Em seguida, descarte aquela carta de Estádio.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 80 Schadenspunkte mehr zu. Lege anschließend jene Stadionkarte auf den Ablagestapel."
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



}

export default card
