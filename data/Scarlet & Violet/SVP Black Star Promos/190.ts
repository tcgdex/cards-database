import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		pt: "Pikachu",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [25],

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Colorless"],

			name: {
				en: "Scrappy Spark",
				fr: "Étincelle Querelleuse",
				pt: "Faísca Obstinada"
			},

			effect: {
				en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				pt: "Jogue uma moeda até que saia coroa. Este ataque causará 30 pontos de dano a mais para cada cara."
			},

			damage: "30+"
		}
	],

	retreat: 1,
	regulationMark: "H"
}

export default card