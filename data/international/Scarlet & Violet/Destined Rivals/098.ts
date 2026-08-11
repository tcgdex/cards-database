import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [476],
	set: Set,

	name: {
		'en-us': "Probopass",
		'fr-fr': "Tarinorme",
		'de-de': "Voluminas",
		'it-it': "Probopass",
		'es-es': "Probopass",
		'pt-br': "Probopass",
		'es-mx': "Probopass"
	},


	illustrator: "sowsow",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'de-de': "Nasgnet",
		'it-it': "Nosepass",
		'es-es': "Nosepass",
		'pt-br': "Nosepass",
		'es-mx': "Nosepass"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Power Gem",
			'fr-fr': "Rayon Gemme",
			'de-de': "Juwelenkraft",
			'it-it': "Gemmoforza",
			'es-es': "Joya de Luz",
			'pt-br': "Gema Poderosa",
			'es-mx': "Joya de Luz"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Mountain Drop",
			'fr-fr': "Montagne Écrasante",
			'de-de': "Gebirgssturz",
			'it-it': "Smottamento",
			'es-es': "Caída Montaña Abajo",
			'pt-br': "Queda da Montanha",
			'es-mx': "Caída Montañosa"
		},

		effect: {
			'en-us': "If a Stadium is in play, this attack does 70 more damage.",
			'fr-fr': "Si un Stade est en jeu, cette attaque inflige 70 dégâts supplémentaires.",
			'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 70 danni in più.",
			'es-es': "Si hay un Estadio en juego, este ataque hace 70 puntos de daño más.",
			'pt-br': "Se um Estádio estiver em jogo, este ataque causará 70 pontos de dano a mais.",
			'es-mx': "Si hay un Estadio en juego, este ataque hace 70 puntos de daño más."
		},

		damage: "70+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825972,
				tcgplayer: 632906
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825972,
				tcgplayer: 632906
			}
		},
	],
}

export default card
