import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Delcatty"
	},

	illustrator: "Keisin",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		id: "Delcatty sangat membenci tempat kotor. Ia selalu merawat bulunya di tempat yang nyaman."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Ekor Pengecoh"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Energy Mixer"
		},

		effect: {
			id: "Pilih sesukanya Energi yang dikenakan pada Pokémon di Arena sendiri, lalu pindahkan sesukanya ke Pokémon sendiri."
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card