import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Skitty"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		id: "Skitty mengejar begitu saja sesuatu yang bergerak. Ia mengejar ekornya sendiri dan berputar-putar di tempat yang sama."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Memanggil Teman"
		},

		effect: {
			id: "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Serudukan"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card