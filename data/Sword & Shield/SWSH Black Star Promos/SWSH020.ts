import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Iron Tail",
			fr: "Queue de Fer"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			fr: "Lancez une pièce jusqu’à obtenir un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Electro Ball",
			fr: "Boule Élek"
		},

		damage: 60,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card