import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Metagross"
	},

	illustrator: "Katsunori Sato",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		id: "Begitu suhu udara menjadi di bawah titik beku, kekuatan magnetnya meningkat sehingga Metagross yang tinggal di gunung bersalju sangat bersemangat."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Comet Punch"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, kerusakan akibat Comet Punch Pokémon ini bertambah sejumlah 60."
		},

		damage: 60,
		cost: ["Metal"]
	}, {
		name: {
			id: "Luster Blast"
		},

		effect: {
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 200,
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
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