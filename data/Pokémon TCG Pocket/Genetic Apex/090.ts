import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pyukumuku"
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Rain Splash"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It lives in warm, shallow waters. If it encounters a foe, it will spit out its internal organs as a means to punch them.",
	}
}

export default card
