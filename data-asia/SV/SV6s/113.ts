import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Poochyena"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		id: "Poochyena mengejar-ngejar mangsa bersama gerombolannya. Mereka menghabisi mangsa tersebut ketika telah lelah, tetapi terkadang mereka kabur karena dilawan balik."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Step Beruntun"
		},

		effect: {
			id: "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Darkness"]
	}, {
		name: {
			id: "Taring Kegelapan"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card