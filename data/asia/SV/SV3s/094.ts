import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Glimmet"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'id-id': "Glimmet menyerap nutrisi dari dinding gua. Kelopak bunga yang terbuat dari kristal beracun menyelimuti tubuh Pokémon ini."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Pertahanan Besi"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan."
		},

		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Bergantung"
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card