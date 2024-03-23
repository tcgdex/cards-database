import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Shinx",
		fr: "Lixy",
		es: "Shinx",
		it: "Shinx",
		pt: "Shinx"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Wild Kick",
			fr: "Coup Déchaîné",
			es: "Patada Salvaje",
			it: "Calcio Selvaggio",
			pt: "Chute sem Pontaria"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card