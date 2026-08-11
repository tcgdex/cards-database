import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Grapploct"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		id: "Grapploct naik ke daratan dan mencari lawan bertarung untuk menguji kemampuannya. Pokémon ini akan kembali ke laut begitu pertarungan selesai."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Menjatuhkan Perlahan-lahan"
		},

		effect: {
			id: "Pada akhir giliran lawan berikutnya, Pokémon yang menerima serangan ini KO."
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Mach Straight"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card