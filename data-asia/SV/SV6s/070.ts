import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Helioptile"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		id: "Helioptile membuat listrik tenaga surya dengan melebarkan jumbai di kepalanya dan menggunakannya untuk mengeluarkan jurus listrik yang kuat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mengumpulkan"
		},

		effect: {
			id: "Ambil 1 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Berpijar-pijar"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card