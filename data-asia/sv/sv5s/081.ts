import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Coalossal"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		id: "Coalossal mengguncangkan badannya dan menyebarkan batu bara dari punggungnya yang membara ke sekitar untuk mengintimidasi."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Gatling Tar"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 80 untuk tiap Energi {Api} yang dikenakan pada Pokémon ini."
		},

		damage: "40+",
		cost: ["Fighting"]
	}, {
		name: {
			id: "Gunung Longsor"
		},

		effect: {
			id: "Buang 2 kartu dari atas Deck lawan ke Trash."
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