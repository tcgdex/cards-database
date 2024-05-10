import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Bramblin"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		id: "Bramblin bergulir ditiup angin di padang gurun tanpa mengetahui tujuannya. Pokémon ini sangat benci jika tubuhnya menjadi basah."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Duri Penusuk"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card