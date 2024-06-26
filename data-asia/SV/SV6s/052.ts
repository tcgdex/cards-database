import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Glalie"
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		id: "Glalie membekukan unsur air yang ada di udara dalam sekejap agar mangsanya tidak dapat melarikan diri."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Damage Beat"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		},

		damage: "20×",
		cost: ["Water"]
	}, {
		name: {
			id: "Crazy Head"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 140,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card