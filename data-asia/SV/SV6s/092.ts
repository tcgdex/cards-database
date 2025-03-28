import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Palossand"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		id: "Palossand melontarkan tulang makhluk hidup yang telah diisap habis energi kehidupannya dari ceruk di lengannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Semprotan Pasir"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, saat Pokémon yang menerima serangan ini menggunakan serangan, lawan melempar koin 1 kali. Jika hasilnya sisi belakang, serangan tersebut gagal."
		},

		damage: 60,
		cost: ["Psychic", "Colorless", "Colorless"]
	}, {
		name: {
			id: "Sand Hollow"
		},

		damage: 150,
		cost: ["Psychic", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card