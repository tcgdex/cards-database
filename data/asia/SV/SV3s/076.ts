import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Gligar"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		id: "Gligar terbang ke arah wajah mangsanya. Selagi mangsa yang ditempeli wajahnya terkejut, Pokémon ini menusukkan jarum beracunnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Beracun"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Racun. Jumlah Token Kerusakan yang diletakkan akibat kondisi Racun ini adalah 2."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card