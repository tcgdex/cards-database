import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [647],
	set: Set,

	name: {
		en: "Keldeo",
		fr: "Keldeo",
		es: "Keldeo",
		it: "Keldeo",
		pt: "Keldeo",
		de: "Keldeo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			it: "Schizzi d'Onda",
			pt: "Onda Borrifante",
			de: "Wellenplatscher"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Four as One",
			fr: "Quatre pour Un",
			es: "Cuatro para Uno",
			it: "Tetrasintonia",
			pt: "Quatro em Um",
			de: "Viererpakt"
		},

		effect: {
			en: "If Cobalion, Terrakion, and Virizion are on your Bench, this attack does 170 more damage.",
			fr: "Si Cobaltium, Terrakium et Viridium sont sur votre Banc, cette attaque inflige 170 dégâts supplémentaires.",
			es: "Si Cobalion, Terrakion y Virizion están en tu Banca, este ataque hace 170 puntos de daño más.",
			it: "Se Cobalion, Terrakion e Virizion sono nella tua panchina, questo attacco infligge 170 danni in più.",
			pt: "Se Cobalion, Terrakion e Virizion estiverem no seu Banco, este ataque causará 170 pontos de dano a mais.",
			de: "Wenn sich Kobalium, Terrakium und Viridium auf deiner Bank befinden, fügt diese Attacke 170 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682093,
		tcgplayer: 451690
	}
}

export default card