import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [559],
	set: Set,

	name: {
		en: "Scraggy",
		fr: "Baggiguane",
		de: "Zurrokex",
		es: "Scraggy",
		it: "Scraggy",
		pt: "Scraggy"
	},

	illustrator: "OKUBO",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Kick Shot",
			fr: "Coup d'Ergots",
			de: "Kickschuss",
			es: "Disparo Patada",
			it: "Colpocalcio",
			pt: "Chute Tiro"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card