import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Golem"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [76],
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Graveler"
	},

	description: {
		'en-us': "When Golem grow old, they stop shedding their\nshells. Those that have lived a long, long time\nhave shells green with moss."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Guard Press"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes −30 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["mega-blaziken"]
}

export default card