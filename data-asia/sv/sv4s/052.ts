import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Toxel"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		id: "Toxel egois dan sangat manja. Pokémon ini menyimpan racun dan listrik secara masing-masing pada 2 kantong yang ada di dalam tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Serudukan Semaunya"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		},

		damage: 60,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card