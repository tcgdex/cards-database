import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'es-es': "Heracross",
		'it-it': "Heracross",
		'pt-br': "Heracross",
		'de-de': "Skaraborn"
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
				'en-us': "Lunge Out",
				'fr-fr': "Allonger",
				'es-es': "Arremeter",
				'it-it': "Affondo Lungo",
				'pt-br': "Bote",
				'de-de': "Sprungangriff"
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
				'en-us': "Riled Horn",
				'fr-fr': "Corne Irritée",
				'es-es': "Cuerno Enfurecido",
				'it-it': "Corna Rabbiose",
				'pt-br': "Chifre Raivoso",
				'de-de': "Wuthorn"
			},
			effect: {
				'en-us': "If your opponent has any TAG TEAM Pokémon in play, this attack does 70 more damage.",
				'fr-fr': "Si votre adversaire a au moins un Pokémon ESCOUADE en jeu, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si tu rival tiene algún Pokémon de equipo de RELEVOS en juego, este ataque hace 70 puntos de daño más.",
				'it-it': "Se il tuo avversario ha dei Pokémon ALLEATI in gioco, questo attacco infligge 70 danni in più.",
				'pt-br': "Se o seu oponente tiver algum Pokémon ALIADOS em jogo, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn dein Gegner mindestens 1 TAG TEAM Pokémon im Spiel hat, fügt diese Attacke 70 Schadenspunkte mehr zu."
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

	description: {
		'en-us': "It's proud of its thick horn. In Alola, its biggest rival is Vikavolt, which it's always fighting with.",
	},

	thirdParty: {
		cardmarket: 407699,
		tcgplayer: 201156
	}
}

export default card
