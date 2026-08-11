import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Toedscruel"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'id-id': "Toedscruel melilit lawan dengan 10 tentakelnya, menyerap nutrisi mereka, dan membuat mereka menderita. Lipatan di tepi kepala Pokémon ini populer karena kelezatannya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Koloni Jamur Lendir"
		},

		effect: {
			'id-id': "Selama Pokémon ini ada di Arena, kartu yang ada di Trash lawan tidak dapat ditambahkan ke Kartu Pegangan menggunakan efek Ability atau Trainer lawan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Jamur Penyerap"
		},

		effect: {
			'id-id': "Pulihkan HP Pokémon ini sejumlah 30."
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