import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Klawf",
		fr: "Craparoi",
		es: "Klawf",
		it: "Klawf",
		pt: "Klawf",
		de: "Klibbe"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Unhinged Scissors",
			fr: "Ciseaux Déjantés",
			es: "Tijeras Desquiciadas",
			it: "Forbici Scatenate",
			pt: "Tesouras Ensandecidas",
			de: "Tobende Scheren"
		},

		effect: {
			en: "If this Pokémon is affected by a Special Condition, this attack does 160 more damage.",
			fr: "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 160 dégâts supplémentaires.",
			es: "Si este Pokémon se ve afectado por una Condición Especial, este ataque hace 160 puntos de daño más.",
			it: "Se questo Pokémon è influenzato da una condizione speciale, questo attacco infligge 160 danni in più.",
			pt: "Se este Pokémon estiver afetado por uma Condição Especial, este ataque causará 160 pontos de dano a mais.",
			de: "Wenn dieses Pokémon von einem Speziellen Zustand betroffen ist, fügt diese Attacke 160 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Boiled Press",
			fr: "Pression Bouillonnante",
			es: "Presión Hirviente",
			it: "Bollipressa",
			pt: "Compressão Escaldante",
			de: "Kochdruck"
		},

		effect: {
			en: "This Pokémon is now Burned.",
			fr: "Ce Pokémon est maintenant Brûlé.",
			es: "Este Pokémon pasa a estar Quemado.",
			it: "Questo Pokémon viene bruciato.",
			pt: "Este Pokémon agora está Queimado.",
			de: "Dieses Pokémon ist jetzt verbrannt."
		},

		damage: 80
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Yuya Oka",

	thirdParty: {
		cardmarket: 740620
	}
}

export default card