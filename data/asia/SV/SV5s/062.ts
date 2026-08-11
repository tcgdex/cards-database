import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Solosis"
	},

	illustrator: "Cona Nitanda",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		id: "Solosis saling menyampaikan pikirannya menggunakan telepati. Jika menerima hentakan keras, cairan yang melapisi tubuhnya akan bocor keluar."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Serangan Kejutan"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		},

		damage: 30,
		cost: ["Colorless"]
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
	regulationMark: "H"
}

export default card