import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [513],
	set: Set,

	name: {
		en: "Pansear",
		fr: "Flamajou",
		es: "Pansear",
		it: "Pansear",
		pt: "Pansear",
		de: "Grillmak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		en: "This Pokémon lives in caves in volcanoes. The fire within the tuft on its head can reach 600 degrees Fahrenheit."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			de: "Überraschungsangriff",
			es: "Ataque Sorpresa",
			pt: "Ataque Surpresa",
			it: "Attacco a Sorpresa"
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
		cardmarket: 582171
	}
}

export default card