import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Timburr"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		id: "Timburr bertarung dengan mengayun-ayunkan balok kayu. Jika ia dapat mengangkat balok kayu yang berat tanpa kesulitan, itu pertanda evolusinya sudah dekat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Pukulan Sekuat Tenaga"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
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