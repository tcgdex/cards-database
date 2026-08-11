import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Larvesta"
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		id: "Zaman dahulu kala, orang-orang memuja Larvesta sebagai utusan matahari, tetapi ia dibenci karena sering menyebabkan kebakaran gunung."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menyeruduk"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Memuntahkan Api"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card