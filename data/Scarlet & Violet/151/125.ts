import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		fr: "Élektek",
		en: "Electabuzz",
		es: "Electabuzz",
		it: "Electabuzz",
		pt: "Electabuzz",
		de: "Elektek"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Combo Électro",
			en: "Electro Combo",
			es: "Combo Eléctrico",
			it: "Elettrocombo",
			pt: "Eletrocombo",
			de: "Elektrokombo"
		},

		effect: {
			fr: "Si Magmar est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires.",
			en: "If Magmar is on your Bench, this attack does 40 more damage.",
			es: "Si Magmar está en tu Banca, este ataque hace 40 puntos de daño más.",
			it: "Se Magmar è nella tua panchina, questo attacco infligge 40 danni in più.",
			pt: "Se Magmar estiver no seu Banco, este ataque causará 40 pontos de dano a mais.",
			de: "Wenn sich Magmar auf deiner Bank befindet, fügt diese Attacke 40 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			fr: "Poing Léger",
			en: "Light Punch",
			es: "Puño Ligero",
			it: "Pugnetto",
			pt: "Soco de Luz",
			de: "Leichter Hieb"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "NC Empire",

	thirdParty: {
		cardmarket: 720395
	}
}

export default card