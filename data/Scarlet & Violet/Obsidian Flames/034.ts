import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [554],
	set: Set,

	name: {
		fr: "Darumarond",
		en: "Darumaka",
		es: "Darumaka",
		it: "Darumaka",
		pt: "Darumaka",
		de: "Flampion"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Coup d'Boule",
			en: "Headbutt",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			fr: "Attaque Surprise",
			en: "Surprise Attack",
			es: "Ataque Sorpresa",
			it: "Attacco a Sorpresa",
			pt: "Ataque Surpresa",
			de: "Überraschungsangriff"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			en: "Flip a coin. If tails, this attack does nothing.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card