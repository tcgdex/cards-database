import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Swablu"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		id: "Swablu berkepribadian yang tidak akan tenang jika dirinya dan sekitarnya tidak bersih. Pokémon ini akan membersihkan kotoran yang ditemukannya menggunakan sayapnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mematuk"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Memulihkan Luka"
		},

		effect: {
			id: "Pulihkan HP 1 Pokémon sendiri sejumlah 30."
		},

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