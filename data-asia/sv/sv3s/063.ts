import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Togetic"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		id: "Togetic akan menjadi tidak sehat jika tidak berada di samping orang yang lemah lembut hatinya. Pokémon ini dapat mengambang di udara tanpa menggerakkan sayap."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Share Peace"
		},

		effect: {
			id: "Kedua pemain masing-masing mengambil 3 kartu dari atas Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Terbang Cepat"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card