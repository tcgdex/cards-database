import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Metang"
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		id: "Dua ekor Beldum yang menempel menggunakan kekuatan magnet. Berkat dua otaknya, kekuatan psikokinesis Metang menguat dua kali lipat."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Metal Maker"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Lihat 4 kartu dari atas Deck sendiri, pilih sesukanya Energi Dasar {Logam} di antaranya, lalu kenakan sesukanya pada Pokémon sendiri. Kocok semua sisa kartu dengan sisi depan menghadap ke bawah, lalu kembalikan ke bawah Deck."
		}
	}],

	attacks: [{
		name: {
			id: "Beam"
		},

		damage: 60,
		cost: ["Metal", "Colorless", "Colorless"]
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
	regulationMark: "H"
}

export default card