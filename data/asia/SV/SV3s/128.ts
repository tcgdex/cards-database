import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Doublade"
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		id: "Doublade menggunakan strategi mengganti posisi menyerang dan bertahan kedua bilah pedang secara terus menerus untuk menghabisi mangsanya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Menyayat"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Slash Down"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Slash Down."
		},

		damage: 80,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card