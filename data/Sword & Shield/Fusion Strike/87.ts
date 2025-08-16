import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [100],
	set: Set,

	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Tomokazu Komiya",

	description: {
		en: "Usually found in power plants. Easily mistaken for a Poké Ball, it has zapped many people."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Single Shot Blast",
			fr: "Explosion Unique",
			de: "Einzelschussballern",
			es: "Disparo Único Explosivo",
			pt: "Explosão Única",
			it: "Tiro a Scoppio Singolo"
		},

		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582412,
		tcgplayer: 253243
	}
}

export default card