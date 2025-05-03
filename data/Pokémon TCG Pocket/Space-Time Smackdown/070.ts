import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Duskull"
	},

	illustrator: "ryoma uratsuka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "If it finds bad children who won't listen to their parents, it will spirit them away—or so it's said."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Will-O-Wisp"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card
