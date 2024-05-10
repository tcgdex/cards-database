import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Iron Crown ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Cobalt Command"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena, kerusakan akibat serangan yang digunakan oleh Pokémon Futur sendiri (selain Iron Crown {ex}) kepada Pokémon Bertarung lawan bertambah sejumlah 20."
		}
	}],

	attacks: [{
		name: {
			id: "Twin Shotel"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan masing-masing sejumlah 50 kepada 2 Pokémon lawan. Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan, Resistansi, dan efek yang sedang dialami Pokémon yang menerima kerusakan."
		},

		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card