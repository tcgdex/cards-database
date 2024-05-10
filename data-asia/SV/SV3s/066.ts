import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Lunatone"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		id: "Lunatone ditemukan pertama kali 40 tahun lalu di tempat jatuhnya meteorit. Pokémon ini dapat membuat musuh tertidur hanya dengan memelototinya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Bulan Baru"
		},

		effect: {
			id: "Berjalan jika ada Solrock di Arena sendiri. Selama Pokémon ini ada di Arena, semua Pokémon sendiri tidak menerima efek Stadium."
		}
	}],

	attacks: [{
		name: {
			id: "Moon Press"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card