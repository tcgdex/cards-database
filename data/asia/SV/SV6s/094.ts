import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Scream Tail ex"
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Jeritan"
		},

		effect: {
			id: "Serangan ini hanya dapat digunakan pada giliran pertama Pemain Kedua. Pada giliran lawan berikutnya, lawan tidak dapat memainkan Supporter dari Kartu Pegangan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Mengunyah"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 120,
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

	retreat: 1,
	regulationMark: "H"
}

export default card