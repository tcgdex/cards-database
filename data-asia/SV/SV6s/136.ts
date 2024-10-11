import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Snorlax"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		id: "Cairan pencerna lambungnya dapat mencerna racun apa pun. Memakan sesuatu yang terjatuh di tanah pun bukanlah masalah bagi Pokémon ini."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mengisi Perut"
		},

		effect: {
			id: "Pilih 1 lembar Energi dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon ini. Setelah itu, pulihkan HP Pokémon ini sejumlah 60."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Heavy Impact"
		},

		damage: 160,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card