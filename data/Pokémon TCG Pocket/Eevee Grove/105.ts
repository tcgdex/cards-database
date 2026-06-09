import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos ex",
		fr: "Électhor-ex"
	},

	illustrator: "PLANETA Saito",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [145],
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic"
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Thundering Hurricane",
			fr: "Rafale d'Éclairs"
		},

		damage: 50,
		cost: ["Lightning", "Lightning", "Lightning"],

		effect: {
			en: "Flip 4 coins. This attack does 50 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card