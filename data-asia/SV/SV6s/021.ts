import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Poltchageist"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		id: "Poltchageist terlihat seperti varian daerah dari Sinistea, tetapi belakangan ini ditemukan bahwa mereka merupakan Pokémon yang tidak ada keterkaitannya sama sekali."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menyediakan Teh"
		},

		effect: {
			id: "Pilih 1 lembar Energi Dasar {Daun} dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		},

		cost: ["Grass"]
	}, {
		name: {
			id: "Serangan Kejutan"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card