import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Wailmer",
		fr: "Wailmer"
	},

	illustrator: "Mékayu",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [320],
	hp: 100,
	types: ["Water"],

	description: {
		en: "When it sucks in a large volume of seawater,\nit becomes like a big, bouncy ball. It eats a ton\nof food daily."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Surf",
			fr: "Surf"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card