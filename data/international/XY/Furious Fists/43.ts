import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Golurk",
		'fr-fr': "Golemastoc",
		'es-es': "Golurk",
		'it-it': "Golurk",
		'pt-br': "Golurk",
		'de-de': "Golgantes"
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
		'en-us': "Golett",
		'fr-fr': "Gringolem",
		'es-es': "Golett",
		'it-it': "Golett",
		'pt-br': "Golett",
		'de-de': "Golbit"
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
				'en-us': "Wreck",
				'fr-fr': "Anéantissement",
				'es-es': "Naufragio",
				'it-it': "Naufragio",
				'pt-br': "Destruir",
				'de-de': "Abreißen"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 60 more damage. Discard that Stadium card.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 60 dégâts supplémentaires. Défaussez la carte Stade.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 60 puntos de daño más. Descarta esa carta de Estadio.",
				'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 60 danni in più. Scarta quella carta Stadio.",
				'pt-br': "Se houver algum card de Estádio em jogo, este ataque causará 60 de danos adicionais. Descarte o card de Estádio.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 60 weitere Schadenspunkte zu. Lege diese Stadionkarte auf den Ablagestapel."
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
				'en-us': "Golurk Hammer",
				'fr-fr': "Maillet Golemastoc",
				'es-es': "Martillo Golurk",
				'it-it': "Martello Golurk",
				'pt-br': "Martelo Golurk",
				'de-de': "Golgantes-Hammer"
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

	description: {
		'en-us': "It is said that Golurk were ordered to protect people and Pokémon by the ancient people who made them.",
	},

	thirdParty: {
		cardmarket: 281707,
		tcgplayer: 92220
	}
}

export default card
