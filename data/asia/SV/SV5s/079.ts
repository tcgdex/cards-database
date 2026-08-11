import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Rolycoly"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'id-id': "Rolycoly berlari mengelilingi padang rumput pada hari yang cerah. Pokémon ini memakan rumput yang melilit di kakinya yang berbentuk seperti roda."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tubrukan Menggelinding"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Power Gem"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card