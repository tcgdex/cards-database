import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [138],

	name: {
		'en-us': "Omanyte"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Helix Fossil"
	},

	description: {
		'en-us': "Because some Omanyte manage to escape after\nbeing restored or are released into the wild by\npeople, this species is becoming a problem."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Water Gun"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card