import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Crustle"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		id: "Capit tebal Crustle adalah senjata terkuatnya. Sedemikian kerasnya sehingga dapat meretakkan pelindung Rhyperior."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Menentang"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Benturan Dinding Tebing"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan dari Pokémon Evolusi yang diterima Pokémon ini berkurang sejumlah 100."
		},

		damage: 100,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card