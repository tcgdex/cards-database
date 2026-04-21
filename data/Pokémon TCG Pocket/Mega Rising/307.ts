import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Geodude"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [74],
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "Geodude that have lived a long life have had all\ntheir edges smoothed out until they're totally\nround. They also have a calm, quiet disposition."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-blaziken"]
}

export default card