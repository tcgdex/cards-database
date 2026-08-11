import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Dugtrio",
		'fr-fr': "Triopikeur",
		'es-es': "Dugtrio",
		'it-it': "Dugtrio",
		'pt-br': "Dugtrio",
		'de-de': "Digdri"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Home Ground",
				'fr-fr': "À Domicile",
				'es-es': "Terreno Local",
				'it-it': "Giocare in Casa",
				'pt-br': "Time da Casa",
				'de-de': "Heimvorteil"
			},
			effect: {
				'en-us': "If you have any Stadium card in play, this attack does 60 more damage.",
				'fr-fr': "Si vous avez une carte Stade en jeu, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si tienes alguna carta de Estadio en juego, este ataque hace 60 puntos de daño más.",
				'it-it': "Se hai in gioco una carta Stadio, questo attacco infligge 60 danni in più.",
				'pt-br': "Se você tiver qualquer carta de Estádio em jogo, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn du eine Stadionkarte im Spiel hast, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "While the three of them normally get along splendidly, on rare occasions a huge fight will break out over which head gets to eat first.",
	},

	thirdParty: {
		cardmarket: 372377,
		tcgplayer: 189185
	}
}

export default card
