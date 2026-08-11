import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Wimpod"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'id-id': "Wimpod selalu hidup bersama kelompoknya dan berjaga-jaga atas bahaya di sekelilingnya. Begitu merasakan kehadiran musuh, mereka segera kabur dan tercerai berai."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Bersembunyi"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		},

		cost: ["Water"]
	}, {
		name: {
			'id-id': "Menggerogot"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card