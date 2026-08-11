import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Mienshao"
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		id: "Tendangan yang diluncurkan Mienshao dengan kecepatan yang tidak dapat ditangkap mata dapat menghancurleburkan batu raksasa."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Tusukan Tiga Tingkat"
		},

		effect: {
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "20×",
		cost: ["Fighting"]
	}, {
		name: {
			id: "Cambuk Ahli"
		},

		effect: {
			id: "Jika pada giliran ini, Pokémon Tool dikenakan dari Kartu Pegangan pada Pokémon ini, kerusakan yang diberikan bertambah sejumlah 70."
		},

		damage: "50+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card