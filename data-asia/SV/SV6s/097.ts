import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Sandshrew"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		id: "Meski terjatuh dari tempat setinggi apa pun, ia dapat memantul dan terselamatkan dengan membulatkan tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menggelinding"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Cakaran Ganda"
		},

		effect: {
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "20×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card