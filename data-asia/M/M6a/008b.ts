import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Vivillon"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		id: "Vivillon yang terlahir di wilayah khusus. Pokémon ini bertarung dengan menyebarkan sisik toksik berwarna-warni dari sayapnya."
	},

	stage: "Stage2",

	evolveFrom: {
		id: "Spewpa"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				id: "Tarian Penuntun"
			},
			effect: {
				id: "Dapat digunakan 1 kali pada giliran sendiri. Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
			},
		},
	],

	attacks: [
		{
			name: {
				id: "Bubuk Beracun"
			},
			damage: 60,
			cost: ["Grass", "Colorless"],
			effect: {
				id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [666],
};

export default card;
