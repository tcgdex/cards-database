import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Jigglypuff"
	},

	illustrator: "Kanako Eo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "It hugely inflates its stomach and sings a mysterious melody. If you hear this melody, you'll become sleepy right away."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rollout"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card