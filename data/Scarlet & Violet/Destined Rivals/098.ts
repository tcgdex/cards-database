import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [476],
	set: Set,

	name: {
		en: "Probopass",
		fr: "Tarinorme",
		de: "Voluminas",
		it: "Probopass",
		es: "Probopass",
		pt: "Probopass",
		'es-mx': "Probopass"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
		de: "Nasgnet",
		it: "Nosepass",
		es: "Nosepass",
		pt: "Nosepass",
		'es-mx': "Nosepass"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
			de: "Juwelenkraft",
			it: "Gemmoforza",
			es: "Joya de Luz",
			pt: "Gema Poderosa",
			'es-mx': "Joya de Luz"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Mountain Drop",
			fr: "Montagne Écrasante",
			de: "Gebirgssturz",
			it: "Smottamento",
			es: "Caída Montaña Abajo",
			pt: "Queda da Montanha",
			'es-mx': "Caída Montañosa"
		},

		effect: {
			en: "If a Stadium is in play, this attack does 70 more damage.",
			fr: "Si un Stade est en jeu, cette attaque inflige 70 dégâts supplémentaires.",
			de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			it: "Se c'è in gioco una carta Stadio, questo attacco infligge 70 danni in più.",
			es: "Si hay un Estadio en juego, este ataque hace 70 puntos de daño más.",
			pt: "Se um Estádio estiver em jogo, este ataque causará 70 pontos de dano a mais.",
			'es-mx': "Si hay un Estadio en juego, este ataque hace 70 puntos de daño más."
		},

		damage: "70+"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825972
	}
}

export default card
