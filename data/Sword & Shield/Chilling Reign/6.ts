import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [214],
	set: Set,

	name: {
		en: "Heracross",
		fr: "Scarhino",
		es: "Heracross",
		it: "Heracross",
		pt: "Heracross",
		de: "Skaraborn"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Horn Attack",
			fr: "Koud'Korne",
			es: "Cornada",
			it: "Incornata",
			pt: "Ataque de Chifre",
			de: "Hornattacke"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Single-Horn Throw",
			fr: "Lancer Unicorne",
			es: "Lanzamiento Cuerno",
			it: "Lancio Monocorno",
			pt: "Arremesso Unicórnio",
			de: "Einzelhornwurf"
		},

		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 160 more damage.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 160 dégâts supplémentaires.",
			es: "Lanza 2 monedas. Si ambas son cara, este ataque hace 160 puntos de daño más.",
			it: "Lancia due volte una moneta. Se esce entrambe le volte testa, questo attacco infligge 160 danni in più.",
			pt: "Jogue 2 moedas. Se as 2 saírem cara, este ataque causará 160 pontos de dano a mais.",
			de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 160 Schadenspunkte mehr zu."
		},

		damage: "40+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It roams through forests searching for sweet nectar. Although it boasts fantastic physical strength, it's not that good at flying."
	},

	thirdParty: {
		cardmarket: 567086
	}
}

export default card
