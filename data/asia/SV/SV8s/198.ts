import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Vibrava"
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		id: "Ia memvibrasikan sayapnya dengan sangat kencang untuk menghasilkan gelombang ultrasonik. Ia melelehkan mangsanya yang pingsan dengan cairan pencernaannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Suara Melengking"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, kerusakan akibat serangan yang diterima Pokémon yang menerima serangan ini bertambah sejumlah 50."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Cutter Wind"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card