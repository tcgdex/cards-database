import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Lairon"
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		id: "Gunung yang ditinggali Lairon kaya dengan mata air dan bijih besi sehingga sering terjadi perselisihan dengan manusia."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Serudukan Baja"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 40,
		cost: ["Metal"]
	}, {
		name: {
			id: "Metal Claw"
		},

		damage: 60,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card