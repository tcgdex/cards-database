import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Geodude",
		fr: "Racaillou"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [74],
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "Geodude that have lived a long life have had all\ntheir edges smoothed out until they're totally\nround. They also have a calm, quiet disposition.",
		fr: "Les aspérités de Racaillou s'adoucissent au fil\\ndes années, tout comme sa personnalité.\\nIl devient tout lisse, tout rond, et tout calme."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge"
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