import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune",
		'es-es': "Suicune",
		'es-mx': "Suicune",
		'de-de': "Suicune",
		'it-it': "Suicune",
		'pt-br': "Suicune"
	},

	rarity: "Rare",
	category: "Pokemon",

	dexId: [245],
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Crystal Fall",
			'fr-fr': "Chute Cristalline",
			'es-es': "Cascada Cristalina",
			'es-mx': "Declive Cristalino",
			'de-de': "Kristallfall",
			'it-it': "Cristalcaduta",
			'pt-br': "Queda Cristalina"
		},

		effect: {
			'en-us': "If you have at least 4 {W} Energy in play, this attack does 90 more damage.",
			'fr-fr': "Si vous avez au moins 4 Énergies {W} en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si tienes por lo menos 4 Energías {W} en juego, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si tienes al menos 4 Energías {W} en juego, este ataque hace 90 puntos de daño más.",
			'de-de': "Wenn du mindestens 4 {W}-Energien im Spiel hast, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'it-it': "Se hai almeno quattro Energie {W} in gioco, questo attacco infligge 90 danni in più.",
			'pt-br': "Se você tiver pelo menos 4 Energias {W} em jogo, este ataque causará 90 pontos de dano a mais."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "Said to be the embodiment of north winds, it can instantly purify filthy, murky water.",
	},

	illustrator: "Takeshi Nakamura",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857601,
				tcgplayer: 662229,
				cardtrader: 356809
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 867791
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857601,
				tcgplayer: 662229,
				cardtrader: 356809
			}
		},
		{
			type: 'holo',
			stamp: ['eb-games'],
			thirdParty: {
				cardmarket: 858506
			}
		},
		{
			type: 'holo',
			stamp: ['gamestop'],
			thirdParty: {
				cardmarket: 858505
			}
		},
	],
}

export default card
