import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
		es: "Dugtrio",
		it: "Dugtrio",
		pt: "Dugtrio",
		de: "Digdri"
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
		en: "Diglett",
		fr: "Taupiqueur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Home Ground",
				fr: "À Domicile",
				es: "Terreno Local",
				it: "Giocare in Casa",
				pt: "Time da Casa",
				de: "Heimvorteil"
			},
			effect: {
				en: "If you have any Stadium card in play, this attack does 60 more damage.",
				fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si tienes alguna carta de Estadio en juego, este ataque hace 60 puntos de daño más.",
				it: "Se hai in gioco una carta Stadio, questo attacco infligge 60 danni in più.",
				pt: "Se você tiver qualquer carta de Estádio em jogo, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn du eine Stadionkarte im Spiel hast, fügt diese Attacke 60 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 372377,
		tcgplayer: 189185
	}
}

export default card
