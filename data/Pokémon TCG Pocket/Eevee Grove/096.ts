import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Electrode",
		fr: "Électrode"
	},

	illustrator: "Scav",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		en: "Voltorb"
	},

	description: {
		en: "The more energy it charges up, the faster\nit gets. But this also makes it more likely\nto explode.",
		fr: "Plus il accumule de l'énergie de type Électrik, plus il est rapide. Mais il a aussi davantage de chances d'exploser."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rolling Attack",
			fr: "Attaque Qui Roule"
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