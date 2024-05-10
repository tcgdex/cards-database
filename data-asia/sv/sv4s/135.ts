import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Toedscruel"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		id: "Toedscruel melilit lawan dengan 10 tentakelnya, menyerap nutrisi mereka, dan membuat mereka menderita. Lipatan di tepi kepala Pokémon ini populer karena kelezatannya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Koloni Jamur Lendir"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena, kartu yang ada di Trash lawan tidak dapat ditambahkan ke Kartu Pegangan menggunakan efek Ability atau Trainer lawan."
		}
	}],

	attacks: [{
		name: {
			id: "Jamur Penyerap"
		},

		effect: {
			id: "Pulihkan HP Pokémon ini sejumlah 30."
		},

		damage: 80,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card