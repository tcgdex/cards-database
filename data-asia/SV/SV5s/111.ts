import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Dudunsparce"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		id: "Dudunsparce membuat sarangnya dengan melubangi batuan dasar jauh di bawah tanah menggunakan ekor kerasnya. Panjang sarangnya mencapai 10 km."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Ambil Kabur"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Ambil 3 kartu dari atas Deck sendiri. Setelah itu, kocok kembali Pokémon ini dan semua kartu yang dikenakannya ke Deck."
		}
	}],

	attacks: [{
		name: {
			id: "Land Crush"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card