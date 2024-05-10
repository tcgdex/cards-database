import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Tynamo"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		id: "Kekuatan listrik seekor Tynamo kecil, tapi gabungan banyak Tynamo dapat membuat listrik dengan kekuatan yang sama dengan petir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Berpijar-pijar"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			id: "Voltase Mini"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card