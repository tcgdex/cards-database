import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Scraggy"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		id: "Scraggy melindungi diri menggunakan kulitnya yang kuat. Kabarnya jika kulitnya telah memanjang hingga maksimal, artinya Pokémon ini akan segera berevolusi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tendangan Rendah"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Headbutt"
		},

		damage: 50,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card