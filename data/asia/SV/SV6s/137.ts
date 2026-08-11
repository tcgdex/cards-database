import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Aipom"
	},

	illustrator: "Mugi Hamada",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'id-id': "Ia tinggal di atas pohon yang tinggi sambil mengendalikan ekornya yang bergerak lebih bebas daripada tangannya dengan mahir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Bergantung"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Tendangan Nakal"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card