import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Revavroom"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		'id-id': "Revavroom mengintimidasi lawan dengan suara knalpot. Pokémon ini mengeluarkan lidah dari mulut silindernya dan menyebarkan cairan beracun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Unggul Kembali"
		},

		effect: {
			'id-id': "Jika pada giliran lawan sebelumnya, ada Pokémon sendiri yang KO karena kerusakan akibat serangan, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "30+",
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Berlari"
		},

		effect: {
			'id-id': "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 100 untuk tiap lemparan dengan hasil sisi depan."
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