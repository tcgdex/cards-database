import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Florges"
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		id: "Dikabarkan taman bunga buatan Florges tanpa henti mengalirkan kekuatan penenang jiwa dan raga."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			id: "Jeratan Menggoda"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Setelah itu, ubah kondisi Pokémon Bertarung yang baru menjadi Pusing."
		}
	}],

	attacks: [{
		name: {
			id: "Magical Shot"
		},

		damage: 120,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card