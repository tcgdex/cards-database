import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Lechonk",
		fr: "Gourmelet",
		de: "Ferkuli",
		it: "Lechonk",
		es: "Lechonk",
		pt: "Lechonk"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Whimsy Tackle",
			fr: "Charge Bizarre",
			de: "Launischer Tackle",
			it: "Capriccioazione",
			es: "Placaje Caprichoso",
			pt: "Investida Fantástica"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card