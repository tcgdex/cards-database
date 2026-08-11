import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Miraidon"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 110,
	types: ["Dragon"],

	description: {
		id: "Tampaknya Miraidon tertera di buku kuno dengan nama Iron Serpent. Dikabarkan Pokémon ini mengubah tanah lapang menjadi abu dengan petir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Accel Peak"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, lalu kenakan sesukanya pada Pokémon Futur sendiri. Kemudian, kocok Deck."
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Sparking Attack"
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Psychic"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card