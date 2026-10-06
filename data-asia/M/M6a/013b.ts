import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Victini"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		id: "Pokémon pembawa kemenangan. Dikatakan bahwa pelatih yang membawa Victini selalu menang dalam pertarungan apa pun."
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				id: "Memanggil Teman"
			},
			cost: ["Colorless"],
			effect: {
				id: "Pilih paling banyak 2 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
			},
		},
		{
			name: {
				id: "V Flame"
			},
			damage: 50,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [494],
};

export default card;
