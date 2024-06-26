import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Tangrowth"
	},

	illustrator: "LINNE",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		id: "Hasil penelitian terbaru menunjukkan bahwa 2 lengan Tangrowth yang dapat dipanjangkan dengan sesukanya ini sebenarnya kumpulan jalar yang disatukan."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Tubuh Hutan"
		},

		effect: {
			id: "Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		}
	}],

	attacks: [{
		name: {
			id: "Menyelungkupi"
		},

		effect: {
			id: "Kerusakan akibat serangan ini berkurang sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "150-",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card