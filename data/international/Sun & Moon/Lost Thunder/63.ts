import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "White Kyurem",
		'fr-fr': "Kyurem Blanc",
		'es-es': "Kyurem Blanco",
		'it-it': "Kyurem Bianco",
		'pt-br': "Kyurem Branco",
		'de-de': "Weißes Kyurem"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 130,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Field Crush",
				'fr-fr': "Broyeur de Terrain",
				'es-es': "Arrasamiento de Campo",
				'it-it': "Invasione di Campo",
				'pt-br': "Esmagamento de Campo",
				'de-de': "Feldschlag"
			},
			effect: {
				'en-us': "If your opponent has a Stadium card in play, discard it.",
				'fr-fr': "Si votre adversaire a une carte Stade en jeu, défaussez-la.",
				'es-es': "Si tu rival tiene alguna carta de Estadio en juego, descártala.",
				'it-it': "Se il tuo avversario ha una carta Stadio in gioco, scartala.",
				'pt-br': "Se o seu oponente tiver uma carta de Estádio em jogo, descarte-a.",
				'de-de': "Wenn dein Gegner eine Stadionkarte im Spiel hat, lege sie auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Freezing Flames",
				'fr-fr': "Flammes Glaçantes",
				'es-es': "Llamas Glaciales",
				'it-it': "Ghiacci Roventi",
				'pt-br': "Chamas Congelantes",
				'de-de': "Frostflammen"
			},
			effect: {
				'en-us': "If this Pokémon has any Fire Energy attached to it, this attack does 80 more damage.",
				'fr-fr': "Si de l’Énergie Fire est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Fire unida a él, este ataque hace 80 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie Fire assegnate, questo attacco infligge 80 danni in più.",
				'pt-br': "Se este Pokémon tiver alguma Energia Fire ligada a ele, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Fire-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It generates a powerful, freezing energy inside itself, but its body became frozen when the energy leaked out.",
	},

	thirdParty: {
		cardmarket: 365701,
		tcgplayer: 178872
	}
}

export default card
