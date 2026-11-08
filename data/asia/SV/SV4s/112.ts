import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Swablu"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'id-id': "Swablu berkepribadian yang tidak akan tenang jika dirinya dan sekitarnya tidak bersih. Pokémon ini akan membersihkan kotoran yang ditemukannya menggunakan sayapnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mematuk"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Memulihkan Luka"
		},

		effect: {
			'id-id': "Pulihkan HP 1 Pokémon sendiri sejumlah 30."
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