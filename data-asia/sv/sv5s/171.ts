import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Walking Wake ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Ombak Besar Biru Tua"
		},

		effect: {
			id: "Kerusakan akibat serangan yang digunakan oleh Pokémon ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		}
	}],

	attacks: [{
		name: {
			id: "Catharsis Roar"
		},

		effect: {
			id: "Jika Pokémon Bertarung lawan mengalami Kondisi Khusus, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "120+",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card