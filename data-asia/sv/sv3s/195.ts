import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Froslass ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Antara Ada dan Tiada"
		},

		effect: {
			id: "Saat Pokémon ini ada di Arena Bertarung dan KO, pemain melempar koin 1 kali. Jika hasilnya sisi depan, Kartu Point yang diambil lawan berkurang 1 lembar."
		}
	}],

	attacks: [{
		name: {
			id: "Frost Bullet"
		},

		effect: {
			id: "Serangan ini juga memberikan kerusakan sejumlah 20 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 140,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card