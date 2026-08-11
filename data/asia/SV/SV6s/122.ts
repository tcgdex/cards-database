import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Aggron"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		id: "Aggron menghabisi musuhnya dengan menabrakkan tubuhnya sambil menyarangkan tanduk tajam yang dapat menembus papan besi yang sangat tebal sekalipun."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Angry Slam"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 50 untuk tiap Pokémon yang memiliki Token Kerusakan di Arena sendiri."
		},

		damage: "50×",
		cost: ["Metal"]
	}, {
		name: {
			id: "Guard Claw"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 50."
		},

		damage: 120,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card