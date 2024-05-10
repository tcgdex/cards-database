import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Darmanitan"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		id: "Makin besar nyala api dalam tubuh Darmanitan, makin meningkat pula kekuatannya. Suhunya dapat melampaui 1400 °C."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Pukulan Berdentang-dentang"
		},

		effect: {
			id: "Jika Pokémon ini memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 60."
		},

		damage: "60+",
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			id: "Heat Blast"
		},

		damage: 140,
		cost: ["Fire", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card