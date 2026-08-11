import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Grookey"
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		id: "Ketika Grookey mengetuk irama dengan stik spesialnya, kekuatan yang membuat tumbuhan sehat akan menjadi gelombang suara dan meluas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tendangan Penghempas"
		},

		damage: 10,
		cost: ["Grass"]
	}, {
		name: {
			id: "Tusukan Ranting"
		},

		damage: 30,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card