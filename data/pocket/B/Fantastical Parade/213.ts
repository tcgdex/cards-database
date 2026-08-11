import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [172],

	name: {
		'en-us': "Pichu"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		'en-us': "It is unskilled at storing electric power.\nAny kind of shock causes it to discharge\nenergy spontaneously."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Crackly Toss"
		},

		effect: {
			'en-us': "Take a {L} Energy from your Energy Zone and attach it to 1 of your Benched Basic Pokémon."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card