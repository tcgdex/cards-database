import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zapdos ex",
		'fr-fr': "Électhor-ex"
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
			'en-us': "Peck",
			'fr-fr': "Picpic"
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Thundering Hurricane",
			'fr-fr': "Rafale d'Éclairs"
		},

		damage: 50,
		cost: ["Lightning", "Lightning", "Lightning"],

		effect: {
			'en-us': "Flip 4 coins. This attack does 50 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card