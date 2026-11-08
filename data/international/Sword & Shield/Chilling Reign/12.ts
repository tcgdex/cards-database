import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [586],
	set: Set,

	name: {
		'en-us': "Sawsbuck",
		'fr-fr': "Haydaim",
		'es-es': "Sawsbuck",
		'it-it': "Sawsbuck",
		'pt-br': "Sawsbuck",
		'de-de': "Kronjuwild"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Deerling",
		'fr-fr': "Vivaldaim",
		'es-es': "Deerling",
		'it-it': "Deerling",
		'pt-br': "Deerling",
		'de-de': "Sesokitz"
	},

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Winter Horn",
			'fr-fr': "Corne Hivernale",
			'es-es': "Cornamenta Invernal",
			'it-it': "Corna Invernali",
			'pt-br': "Chifre Invernal",
			'de-de': "Winterhorn"
		},

		effect: {
			'en-us': "If you have a Stadium in play, this attack does 80 more damage.",
			'fr-fr': "Si vous avez un Stade en jeu, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si tienes un Estadio en juego, este ataque hace 80 puntos de daño más.",
			'it-it': "Se hai in gioco una carta Stadio, questo attacco infligge 80 danni in più.",
			'pt-br': "Se você tiver um Estádio em jogo, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn du eine Stadionkarte im Spiel hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "They migrate according to the seasons. People can tell the season by looking at Sawsbuck's horns."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567092,
				tcgplayer: 241661
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567092,
				tcgplayer: 241661
			}
		},
	],
}

export default card
