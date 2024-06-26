import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Ogerpon Topeng Fondasi ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Kuda-kuda Fondasi"
		},

		effect: {
			id: "Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon lawan yang memiliki Ability."
		}
	}],

	attacks: [{
		name: {
			id: "Memecah Penuh Tenaga"
		},

		effect: {
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan, Resistansi, dan efek yang sedang dialami Pokémon Bertarung lawan."
		},

		damage: 140,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card