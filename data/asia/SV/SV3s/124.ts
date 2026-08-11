import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Pawniard"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		id: "Pawniard tidak takut menantang lawan kuat sekalipun. Ketika waktunya tiba, Pokémon ini mencengkeram lawan dan menusuknya dengan pedang di tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tripel Pemotong"
		},

		effect: {
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
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