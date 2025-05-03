import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Drifblim"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Drifloon"
	},

	description: {
		en: "It can generate and release gas within its body. That's how it can control the altitude of its drift."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gust"
		},

		damage: 40,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 0
}

export default card