import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Kecleon"
	},

	illustrator: "Mori Yuu",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'id-id': "Kecleon mengubah warna tubuhnya untuk mencampurkan diri dengan pemandangan. Jika tidak diperhatikan dalam waktu lama, Pokémon ini akan merajuk dan tidak memperlihatkan wujudnya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Mahir Bersembunyi"
		},

		effect: {
			'id-id': "Saat Pokémon ini menerima kerusakan akibat serangan, pemain melempar koin 1 kali. Jika hasilnya sisi depan, Pokémon ini tidak menerima kerusakan tersebut."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Cambuk Lidah"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 30 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

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