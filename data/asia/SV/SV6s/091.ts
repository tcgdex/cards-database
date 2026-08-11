import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Sandygast"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		id: "Sandygast membutakan mangsanya dengan pasir dan hendak mendekatinya pada kesempatan itu, tetapi mangsa tersebut melarikan diri karena pergerakan Pokémon ini lambat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Semprotan Pasir"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, saat Pokémon yang menerima serangan ini menggunakan serangan, lawan melempar koin 1 kali. Jika hasilnya sisi belakang, serangan tersebut gagal."
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			id: "Hollow Shot"
		},

		damage: 30,
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

	retreat: 3,
	regulationMark: "H"
}

export default card