import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Applin"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		id: "Applin hidup di dalam buah apel. Jika apelnya habis, Pokémon ini akan melemah karena kehilangan cairan tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Rolling Attack"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		},

		damage: "10+",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card