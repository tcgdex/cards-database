import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Vibrava"
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'id-id': "Ia memvibrasikan sayapnya dengan sangat kencang untuk menghasilkan gelombang ultrasonik. Ia melelehkan mangsanya yang pingsan dengan cairan pencernaannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Suara Melengking"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, kerusakan akibat serangan yang diterima Pokémon yang menerima serangan ini bertambah sejumlah 50."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Cutter Wind"
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