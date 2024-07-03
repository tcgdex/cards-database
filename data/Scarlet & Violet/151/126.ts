import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [126],
	set: Set,

	name: {
		fr: "Magmar",
		en: "Magmar",
		es: "Magmar",
		it: "Magmar",
		pt: "Magmar",
		de: "Magmar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Charbon Mutant",
			en: "Live Coal",
			es: "Carbón Activado",
			it: "Carboni Ardenti",
			pt: "Carvão Vivo",
			de: "Glühende Kohlen"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			fr: "Combo Flamboyant",
			en: "Flare Combo",
			es: "Combo Flamígero",
			it: "Fiammacombo",
			pt: "Flamacombo",
			de: "Flammenkombo"
		},

		effect: {
			fr: "Si Élektek est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
			en: "If Electabuzz is on your Bench, this attack does 80 more damage.",
			es: "Si Electabuzz está en tu Banca, este ataque hace 80 puntos de daño más.",
			it: "Se Electabuzz è nella tua panchina, questo attacco infligge 80 danni in più.",
			pt: "Se Electabuzz estiver no seu Banco, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn sich Elektek auf deiner Bank befindet, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card