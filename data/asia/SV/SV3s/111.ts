import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Scraggy"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'id-id': "Scraggy melindungi diri menggunakan kulitnya yang kuat. Kabarnya jika kulitnya telah memanjang hingga maksimal, artinya Pokémon ini akan segera berevolusi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tendangan Rendah"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Headbutt"
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