import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Revavroom"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		id: "Revavroom mengintimidasi lawan dengan suara knalpot. Pokémon ini mengeluarkan lidah dari mulut silindernya dan menyebarkan cairan beracun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Unggul Kembali"
		},

		effect: {
			id: "Jika pada giliran lawan sebelumnya, ada Pokémon sendiri yang KO karena kerusakan akibat serangan, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "30+",
		cost: ["Colorless"]
	}, {
		name: {
			id: "Berlari"
		},

		effect: {
			id: "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 100 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "100×",
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card