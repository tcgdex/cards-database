import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Phanpy"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'id-id': "Phanpy jauh lebih kuat dibandingkan penampilannya. Putaran belalainya dapat mematahkan lengan manusia yang bersentuhan dengannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tandukan Kepala"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card