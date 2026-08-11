import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Roselia"
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		id: "Menghirup aroma bunga Roselia membuat perasaan jadi tenang. Roselia dengan aroma yang kuat adalah pertanda ia sehat."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Jarum Racun"
		},

		effect: {
			id: "Saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, ubah kondisi Pokémon yang telah menggunakan serangan menjadi Racun."
		}
	}],

	attacks: [{
		name: {
			id: "Leaf Step"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card