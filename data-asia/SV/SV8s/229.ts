import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Milotic ex"
	},

	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Sisik Gemerlap"
		},

		effect: {
			id: "Pokémon ini tidak menerima kerusakan dan efek akibat serangan dari Pokémon Terastal lawan."
		}
	}],

	attacks: [{
		name: {
			id: "Hypnosplash"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		damage: 160,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card