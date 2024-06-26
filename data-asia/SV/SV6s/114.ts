import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Mightyena"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		id: "Ketika bau mangsa yang berada di kejauhan tercium, gerombolan Pokémon ini akan mulai bergerak secara serentak sesuai perintah pemimpinnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Berburu Menggerombol"
		},

		effect: {
			id: "Jika ada Mightyena di Cadangan sendiri, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "30+",
		cost: ["Darkness"]
	}, {
		name: {
			id: "Memojokkan"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 60,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card