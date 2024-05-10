import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Pumpkaboo"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		id: "Cahaya yang terpancar dari lubang di labu Pumpkaboo menghipnosis dan mengendalikan manusia dan Pokémon yang melihatnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Bom Benih"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			id: "Menyerang"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card