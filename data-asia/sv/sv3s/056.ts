import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Toxel"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		id: "Toxel tetap baik-baik saja meskipun meminum air kotor. Dengan organ di dalam tubuhnya, Pokémon ini menyaring air tersebut menjadi cairan beracun yang tidak berbahaya bagi dirinya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Gasak Sedikit"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card