import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Golett",
		fr: "Gringolem",
		de: "Golbit",
		it: "Golett",
		pt: "Golett",
		es: "Golett",
		'es-mx': "Golett"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Best Punch",
			fr: "Coup de Poing Ultime",
			de: "Bester Schlag",
			it: "Migliorpugno",
			pt: "Soco Absoluto",
			es: "Mejor Puñetazo",
			'es-mx': "Puño Supremo"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada."
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835992
	}
}

export default card