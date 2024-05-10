import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Pidgey"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		id: "Meski Pidgey berkepribadian tenang dan tidak menyukai pertikaian, ia akan melawan balik dengan ganas jika diganggu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Hembusan Angin"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card