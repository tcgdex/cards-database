import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Unfezant"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		id: "Unfezant memiliki kemampuan terbang yang tinggi. Yang betina unggul dalam stamina untuk terbang, sedangkan yang jantan unggul dalam kecepatan terbang."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Reverse Wind"
		},

		effect: {
			id: "Pemain dapat memilih 2 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu mengembalikannya ke Kartu Pegangan lawan."
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Kekuatan Laten"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card