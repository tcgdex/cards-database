import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Nidoran♀",
		fr: "Nidoran♀ de la Team Rocket",
		de: "Team Rockets Nidoran♀",
		it: "Nidoran♀ del Team Rocket",
		es: "Nidoran♀ del Team Rocket",
		pt: "Nidoran♀ da Equipe Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			de: "Überraschungsangriff",
			it: "Attacco a Sorpresa",
			es: "Ataque Sorpresa",
			pt: "Ataque Surpresa"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card