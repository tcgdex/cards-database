import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Kyogre"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		id: "Pokémon dalam mitos yang memperluas laut dengan hujan besar dan tsunami besar. Ia bertarung sengit dengan Groudon."
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				id: "Pompa Air"
			},
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi <span class=\"energy-symbol Water\" title=\"Air\">Water</span> yang dikenakan pada Pokémon ini."
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 4,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [382],
};

export default card;
