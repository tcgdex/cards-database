import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dhelmise",
		'fr-fr': "Sinistrail",
		'de-de': "Moruda",
		'it-it': "Dhelmise",
		'es-es': "Dhelmise",
		'pt-br': "Dhelmise",
		'es-mx': "Dhelmise"
	},

	illustrator: "Haru Akasaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",
	dexId: [781],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Earthen Power",
			'fr-fr': "Puissance Tellurique",
			'de-de': "Erdenkraft",
			'it-it': "Terrapotenza",
			'es-es': "Poder Terrestre",
			'pt-br': "Poder Terrestre",
			'es-mx': "Poder Terráqueo"
		},

		effect: {
			'en-us': "If you have a Stadium in play, this attack does 50 more damage.",
			'fr-fr': "Si vous avez un Stade en jeu, cette attaque inflige 50 dégâts supplémentaires.",
			'de-de': "Wenn du ein Stadion im Spiel hast, fügt diese Attacke 50 Schadenspunkte mehr zu.",
			'it-it': "Se hai una carta Stadio in gioco, questo attacco infligge 50 danni in più.",
			'es-es': "Si tienes un Estadio en juego, este ataque hace 50 puntos de daño más.",
			'pt-br': "Se você tiver um Estádio em jogo, este ataque causará 50 pontos de dano a mais.",
			'es-mx': "Si tienes un Estadio en juego, este ataque hace 50 puntos de daño más."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851089,
				tcgplayer: 654357
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851089,
				tcgplayer: 654357
			}
		},
	],
}

export default card
