import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Cottonee"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		id: "Cottonee menyemburkan kapas untuk melindungi dirinya. Saat badai, kadang ada yang terbawa angin topan hingga ke belahan lain planet."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Triple Spin"
		},

		effect: {
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card