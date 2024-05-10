import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Feebas"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		id: "Pokémon yang lusuh dan jelek, tapi memiliki daya hidup yang gigih sehingga Feebas dapat bertahan hidup di tempat yang airnya sedikit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Draw Up"
		},

		effect: {
			id: "Pilih 1 lembar Energi dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card