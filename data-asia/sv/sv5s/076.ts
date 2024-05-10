import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Golurk"
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		id: "Pada dinding di kastel manusia purba, terdapat tumpuan bagi Golurk untuk menembakkan sinar laser bagaikan meriam."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Pertahanan Besi"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan."
		},

		cost: ["Fighting"]
	}, {
		name: {
			id: "Tinju Semangat Petarung"
		},

		effect: {
			id: "Jika Pokémon Bertarung lawan adalah Pokémon {ex}/{V}, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "120+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card