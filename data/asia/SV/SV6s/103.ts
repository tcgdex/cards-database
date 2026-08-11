import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Timburr"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'id-id': "Timburr bertarung dengan mengayun-ayunkan balok kayu. Jika ia dapat mengangkat balok kayu yang berat tanpa kesulitan, itu pertanda evolusinya sudah dekat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Pukulan Sekuat Tenaga"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		},

		damage: 40,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card