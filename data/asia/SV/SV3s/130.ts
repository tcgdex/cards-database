import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Zacian"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		id: "Penampilan Zacian yang menebas segala hal membuatnya dikenal sebagai Pedang Raja Peri. Pokémon ini ditakuti dan dipuja oleh kawan maupun lawan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Raungan Besi"
		},

		effect: {
			id: "Pilih 1 lembar Energi Dasar {Logam} dari Trash sendiri, lalu kenakan pada Pokémon Cadangan."
		},

		damage: 30,
		cost: ["Metal"]
	}, {
		name: {
			id: "Pedang Keberanian"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 130,
		cost: ["Metal", "Metal", "Colorless"]
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