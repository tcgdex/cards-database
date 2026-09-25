import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Wishiwashi"
	},

	illustrator: "Narano",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		id: "Karena 1 ekor Wishiwashi sangat lemah, mereka memperoleh kemampuan untuk berkelompok dalam menghadapi musuh."
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				id: "Serangan Balasan Gerombolan"
			},
			effect: {
				id: "Selama Pokémon ini ada di Arena, saat Wishiwashi (termasuk Wishiwashi ex) di Arena Bertarung sendiri menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 3 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
			},
		},
	],

	attacks: [
		{
			name: {
				id: "Serangan Kejutan"
			},
			damage: 30,
			cost: ["Water"],
			effect: {
				id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [746],
};

export default card;
