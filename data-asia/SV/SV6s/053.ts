import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Froslass"
	},

	illustrator: "Makura Tami",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		id: "Dikatakan bahwa Froslass menghias tempat rahasianya dengan mangsanya yang dibekukan menggunakan embusan napas bersuhu -50 ºC."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Tudung Pembeku"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena, tiap kali Pokémon Check, letakkan masing-masing sejumlah 1 Token Kerusakan pada semua Pokémon kedua pemain yang memiliki Ability (selain Froslass)."
		}
	}],

	attacks: [{
		name: {
			id: "Frost Smash"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card