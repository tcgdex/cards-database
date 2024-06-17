import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [19],
	set: Set,

	name: {
		en: "Alolan Rattata",
		fr: "Rattata d'Alola",
		es: "Rattata de Alola",
		it: "Rattata di Alola",
		pt: "Rattata de Alola",
		de: "Alola-Rattfratz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hyper Fang",
			fr: "Croc de Mort",
			es: "Hipercolmillo",
			it: "Iperzanna",
			pt: "Hiperpresa",
			de: "Hyperzahn"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card