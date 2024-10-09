import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Kilowattrel"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		id: "Kilowattrel menyimpan listrik yang dibuat menggunakan sayapnya di kantong tenggorokannya. Pokémon ini tidak pandai berenang karena kandungan minyak pada bulunya sangat sedikit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Muatan Tenaga Angin"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, kerusakan akibat serangan yang digunakan oleh Pokémon ini kepada Pokémon Bertarung lawan bertambah sejumlah 120."
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Strong Volt"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 100,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
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