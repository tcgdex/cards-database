import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Phantump"
	},

	illustrator: "Katsunori Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		id: "Pokémon yang merupakan roh anak kecil yang meninggal, lalu bersemayam di tunggul pohon. Ia berkeliaran di hutan dan mencari kawan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Bibit Parasit"
		},

		effect: {
			id: "Pulihkan HP Pokémon ini sejumlah 20."
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card