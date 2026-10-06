import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Moltres"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		id: "Moltres adalah salah satu Pokémon burung legendaris yang api sayapnya berkilap merah cantik ketika dikepakkan."
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				id: "Kepakan Berkobar"
			},
			effect: {
				id: "Dapat digunakan 1 kali pada giliran sendiri jika ada Articuno dan Zapdos di Arena sendiri. Pilih 1 lembar Energi Dasar Api dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon ini."
			},
		},
	],

	attacks: [
		{
			name: {
				id: "Pusaran Api"
			},
			damage: 130,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
			},
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
	dexId: [146],
};

export default card;
