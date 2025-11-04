import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [632],
	set: Set,

	name: {
		en: "Durant",
		fr: "Fermite",
		de: "Fermicula",
		it: "Durant",
		pt: "Durant",
		es: "Durant",
		'es-mx': "Durant"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Bite Together",
			fr: "Morsure Commune",
			de: "Kollektiver Biss",
			it: "Morso Collettivo",
			pt: "Mordida em Bando",
			es: "Mordedura Conjunta",
			'es-mx': "Mordida Conjunta"
		},

		effect: {
			en: "If Durant is on your Bench, this attack does 20 more damage.",
			fr: "Si Fermite est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires.",
			de: "Wenn sich Fermicula auf deiner Bank befindet, fügt diese Attacke 20 Schadenspunkte mehr zu.",
			it: "Se Durant è nella tua panchina, questo attacco infligge 20 danni in più.",
			pt: "Se Durant estiver no seu Banco, este ataque causará 20 pontos de dano a mais.",
			es: "Si Durant está en tu Banca, este ataque hace 20 puntos de daño más.",
			'es-mx': "Si Durant está en tu Banca, este ataque hace 20 puntos de daño más."
		},

		damage: "20+"
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			de: "Klammer",
			it: "Presa",
			pt: "Agarramento Compressor",
			es: "Agarre",
			'es-mx': "Fuerza de Garra"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836184
	}
}

export default card