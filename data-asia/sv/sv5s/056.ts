import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Mr. Mime"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		id: "Banyak ilmuwan yang berpendapat bahwa telapak tangan Mr. Mime tumbuh besar untuk melakukan pantomim."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Pertunjukan Persis"
		},

		effect: {
			id: "Lihat Kartu Pegangan lawan. Pemain dapat memilih 1 lembar Supporter yang ada di antaranya, lalu menggunakan efek Supporter tersebut sebagai efek serangan ini."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Telepati Menyeramkan"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card