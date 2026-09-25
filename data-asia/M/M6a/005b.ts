import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Tropius"
	},

	illustrator: "Minahamu",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		id: "Apabila selalu memakan buah yang sama, tumbuh buah yang sangat lezat di leher Tropius."
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				id: "Unggul Kembali"
			},
			damage: "30+",
			cost: ["Grass", "Colorless"],
			effect: {
				id: "Jika pada giliran lawan sebelumnya, ada Pokémon sendiri yang KO karena kerusakan akibat serangan, kerusakan yang diberikan bertambah sejumlah 90."
			},
		},
		{
			name: {
				id: "Cutter Wind"
			},
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [357],
};

export default card;
