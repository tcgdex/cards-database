import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Meditite"
	},

	illustrator: "Natsumi Miyanose",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		id: "Meditite meningkatkan energi jiwanya dengan bermeditasi, lalu melayang di udara. Pokémon ini memakan 1 buah beri per harinya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menampar"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Kick"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card