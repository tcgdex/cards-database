import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Mienfoo"
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'id-id': "Meskipun tubuhnya kecil, Mienfoo memiliki temperamen kasar. Lawan yang lengah dan mendekatinya akan disambut oleh pukulan beruntun yang menawan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tendangan Rendah"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Pukulan Lurus"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card