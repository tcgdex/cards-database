import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Coalossal"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		'id-id': "Coalossal mengguncangkan badannya dan menyebarkan batu bara dari punggungnya yang membara ke sekitar untuk mengintimidasi."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'id-id': "Gatling Tar"
		},

		effect: {
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 80 untuk tiap Energi {Api} yang dikenakan pada Pokémon ini."
		},

		damage: "40+",
		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Gunung Longsor"
		},

		effect: {
			'id-id': "Buang 2 kartu dari atas Deck lawan ke Trash."
		},

		damage: 150,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card