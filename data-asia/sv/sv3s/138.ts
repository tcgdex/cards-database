import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Pidgeotto"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		id: "Pidgeotto memiliki wilayah teritorial yang luas. Pokémon ini mematuk secara menyeluruh penyusup yang memasuki wilayah teritorialnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Pukulan Sayap"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
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