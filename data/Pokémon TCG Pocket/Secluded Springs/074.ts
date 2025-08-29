import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Yamper"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "This gluttonous Pokémon only assists people with\ntheir work because it wants treats. As it runs,\nit crackles with electricity."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Zap Kick"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card