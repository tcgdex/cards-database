import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Palossand ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Neraka Pasir"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 160,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			id: "Baryte Jail"
		},

		effect: {
			id: "Letakkan Token Kerusakan pada semua Pokémon Cadangan lawan hingga sisa HP masing-masing Pokémon tersebut menjadi sejumlah 100."
		},

		cost: ["Water", "Psychic", "Fighting"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card