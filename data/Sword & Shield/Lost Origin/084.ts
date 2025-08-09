import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		en: "Hisuian Arcanine",
		fr: "Arcanin de Hisui",
		es: "Arcanine de Hisui",
		it: "Arcanine di Hisui",
		pt: "Arcanine de Hisui",
		de: "Hisui-Arkani"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Hisuian Growlithe",
		fr: "Caninos de Hisui",
		es: "Growlithe de Hisui",
		it: "Growlithe di Hisui",
		pt: "Growlithe de Hisui",
		de: "Hisui-Fukano"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Very Vulnerable",
			fr: "Vraiment Vulnérable",
			es: "Muy Vulnerable",
			it: "Alta Vulnerabilità",
			pt: "Muito Vulnerável",
			de: "Sehr verwundbar"
		},

		effect: {
			en: "If you have no cards in your hand, this attack does 150 more damage.",
			fr: "Si vous n'avez aucune carte dans votre main, cette attaque inflige 150 dégâts supplémentaires.",
			es: "Si no tienes ninguna carta en tu mano, este ataque hace 150 puntos de daño más.",
			it: "Se non hai carte in mano, questo attacco infligge 150 danni in più.",
			pt: "Se você não tiver cartas na sua mão, este ataque causará 150 pontos de dano a mais.",
			de: "Wenn du keine Karten auf deiner Hand hast, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card
