import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Rolycoly"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		id: "Rolycoly berlari mengelilingi padang rumput pada hari yang cerah. Pokémon ini memakan rumput yang melilit di kakinya yang berbentuk seperti roda."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tubrukan Menggelinding"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Power Gem"
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