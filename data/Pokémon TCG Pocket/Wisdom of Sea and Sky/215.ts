import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Gyarados"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Magikarp"
	},

	description: {
		en: "Once it appears, it goes on a rampage.\nIt remains enraged until it demolishes\neverything around it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wild Swing"
		},

		damage: 20,
		cost: ["Water", "Water"],

		effect: {
			en: "You may discard any number of your Benched {W} Pokémon. This attack does 40 more damage for each Benched Pokémon you discarded in this way."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["lugia"]
}

export default card