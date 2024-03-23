import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Cottonee",
		fr: "Doudouvet",
		es: "Cottonee",
		it: "Cottonee",
		pt: "Cottonee"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Fickle Attack",
			fr: "Attaque Inconstante",
			es: "Ataque Impredecible",
			it: "Attacco Bislacco",
			pt: "Ataque Errático"
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