import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Golurk",
		fr: "Golemastoc",
		es: "Golurk",
		it: "Golurk",
		pt: "Golurk",
		de: "Golgantes"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		623,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
		es: "Golett",
		it: "Golett",
		pt: "Golett",
		de: "Golbit"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wreck",
				fr: "Anéantissement",
				es: "Naufragio",
				it: "Naufragio",
				pt: "Destruir",
				de: "Abreißen"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 60 more damage. Discard that Stadium card.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 60 dégâts supplémentaires. Défaussez la carte Stade.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 60 puntos de daño más. Descarta esa carta de Estadio.",
				it: "Se c'è in gioco una carta Stadio, questo attacco infligge 60 danni in più. Scarta quella carta Stadio.",
				pt: "Se houver algum card de Estádio em jogo, este ataque causará 60 de danos adicionais. Descarte o card de Estádio.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 60 weitere Schadenspunkte zu. Lege diese Stadionkarte auf den Ablagestapel."
			},
			damage: "60+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Golurk Hammer",
				fr: "Maillet Golemastoc",
				es: "Martillo Golurk",
				it: "Martello Golurk",
				pt: "Martelo Golurk",
				de: "Golgantes-Hammer"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 281707
	}
}

export default card
