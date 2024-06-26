import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Hawlucha"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		id: "Hawlucha hidup tenang tanpa membentuk kelompok. Primeape yang membuat kegaduhan dengan gerombolannya adalah musuh alami Pokémon ini sehingga selalu terjadi perselisihan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Side Counter"
		},

		effect: {
			id: "Jika sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "50+",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card