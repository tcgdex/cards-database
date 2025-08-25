import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "It concentrates the weak electric charges emitted\nby its cells and launches wicked lightning bolts."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Beginning Bolt"
		},

		damage: 40,
		cost: ["Lightning"],

		effect: {
			en: "If this Pokémon evolved during this turn, this attack does 20 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card