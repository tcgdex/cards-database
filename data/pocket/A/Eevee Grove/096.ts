import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Electrode",
		'fr-fr': "Électrode"
	},

	illustrator: "Scav",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [101],
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Voltorb"
	},

	description: {
		'en-us': "The more energy it charges up, the faster\nit gets. But this also makes it more likely\nto explode.",
		'fr-fr': "Plus il accumule de l'énergie de type Électrik, plus il est rapide. Mais il a aussi davantage de chances d'exploser."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Rolling Attack",
			'fr-fr': "Attaque Qui Roule"
		},

		damage: 50,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card