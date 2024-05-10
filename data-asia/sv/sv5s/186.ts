import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Gouging Fire ex"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Heat Blast"
		},

		damage: 60,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			id: "Maju Pesat Api Berkobar"
		},

		effect: {
			id: "Jika Pokémon ini telah menggunakan serangan ini, Pokémon ini tidak dapat menggunakan Maju Pesat Api Berkobar hingga meninggalkan Arena Bertarung."
		},

		damage: 260,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card