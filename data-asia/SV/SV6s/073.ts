import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Tadbulb"
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		id: "Tadbulb mengambang menggunakan listrik yang tersimpan di tubuhnya. Pokémon ini mengambang lebih tinggi dibandingkan biasanya saat bercuaca awan petir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Serudukan"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Electro Ball"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card