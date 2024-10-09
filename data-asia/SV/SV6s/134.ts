import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Blissey ex"
	},

	illustrator: "Iwamoto05",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Happy Switch"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 Energi Dasar yang dikenakan pada Pokémon di Arena sendiri, lalu pindahkan ke Pokémon sendiri lainnya."
		}
	}],

	attacks: [{
		name: {
			id: "Membalas Budi"
		},

		effect: {
			id: "Pemain dapat mengambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 6 lembar."
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card