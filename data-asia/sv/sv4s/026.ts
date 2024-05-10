import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Armarouge ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Rouge Armor"
		},

		effect: {
			id: "Jika HP Pokémon ini masih penuh, kerusakan akibat serangan dari Pokémon lawan yang diterima Pokémon ini berkurang sejumlah 80."
		}
	}],

	attacks: [{
		name: {
			id: "Bazoka Berpijar"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 40 untuk tiap Energi {Api} yang dikenakan pada Pokémon ini."
		},

		damage: "40+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card