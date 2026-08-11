import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Chi-Yu"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		id: "Chi-Yu mengendalikan api bersuhu 3000 ℃. Pokémon ini melelehkan batu dan kerikil, dan berenang dengan tenang di lautan magma buatannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Flare Bring"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar {Api} dari Trash sendiri, lalu kenakan pada 1 Pokémon sendiri."
		},

		cost: ["Fire"]
	}, {
		name: {
			id: "Inferno Kedengkian"
		},

		effect: {
			id: "Jika pada giliran lawan sebelumnya, ada Pokémon sendiri yang KO karena kerusakan akibat serangan, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "50+",
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card