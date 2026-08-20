import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Graveler",
		fr: "Gravalanch"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [75],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Geodude",
		fr: "Racaillou"
	},

	description: {
		en: "It climbs up cliffs as it heads toward the peak\nof a mountain. As soon as it reaches the summit,\nit rolls back down the way it came.",
		fr: "Il escalade les falaises pour en atteindre\\nles sommets. Une fois tout en haut, il se\\nlaisse rouler par le chemin d'où il est arrivé."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Lunge Out",
			fr: "Allonger"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["mega-blaziken"]
}

export default card