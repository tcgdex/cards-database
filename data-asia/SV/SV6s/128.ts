import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Dreepy"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		id: "Dikatakan bahwa alasan Dreepy menggigit erat Clauncher meskipun ia tidak memakannya adalah perilaku bawaan ketika ia masih hidup."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mendendam Sedikit"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			id: "Menggigit"
		},

		damage: 40,
		cost: ["Fire", "Psychic"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card