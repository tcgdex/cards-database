import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Grotle"
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		id: "Grotle hidup di sekitar perairan di dalam hutan. Pada siang hari, Pokémon ini keluar hutan untuk memberikan cahaya pada pohon di tempurungnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Potongan Iai"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			id: "Serudukan Tempurung"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 20."
		},

		damage: 50,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card