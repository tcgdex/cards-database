import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Varoom"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		id: "Dikatakan bahwa Varoom terlahir dari Pokémon racun misterius yang masuk ke dalam mesin terbengkalai di pabrik besi bekas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Ambil Berputar"
		},

		effect: {
			id: "Ambil 1 kartu dari atas Deck sendiri."
		},

		damage: 10,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card