import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
		de: "Moruda",
		it: "Dhelmise",
		es: "Dhelmise",
		pt: "Dhelmise",
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
			en: "Earthen Power",
			fr: "Puissance Tellurique",
			de: "Erdenkraft",
			it: "Terrapotenza",
			es: "Poder Terrestre",
			pt: "Poder Terrestre",
			'es-mx': "Poder Terráqueo"
		},

		effect: {
			en: "If you have a Stadium in play, this attack does 50 more damage.",
			fr: "Si vous avez un Stade en jeu, cette attaque inflige 50 dégâts supplémentaires.",
			de: "Wenn du ein Stadion im Spiel hast, fügt diese Attacke 50 Schadenspunkte mehr zu.",
			it: "Se hai una carta Stadio in gioco, questo attacco infligge 50 danni in più.",
			es: "Si tienes un Estadio en juego, este ataque hace 50 puntos de daño más.",
			pt: "Se você tiver um Estádio em jogo, este ataque causará 50 pontos de dano a mais.",
			'es-mx': "Si tienes un Estadio en juego, este ataque hace 50 puntos de daño más."
		},

		damage: "30+"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654357,
		cardmarket: 851089
	}
}

export default card