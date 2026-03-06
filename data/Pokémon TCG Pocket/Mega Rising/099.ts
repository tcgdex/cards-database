import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Misdreavus"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [200],
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "It loves to bite and yank people's hair from\nbehind without warning, just to see their\nshocked reactions."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Spin"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card