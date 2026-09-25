import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Reshiram"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		id: "Pokémon legendaris yang dapat membakar hangus dunia dengan apinya. Reshiram menolong orang yang menyusun dunia kebenaran."
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				id: "Menyayat"
			},
			damage: 50,
			cost: ["Fire", "Colorless"],
		},
		{
			name: {
				id: "Laser Flame"
			},
			damage: "80+",
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				id: "Jika Pokémon ini mengenakan Energi <span class=\"energy-symbol Lightning\" title=\"Petir\">Lightning</span>, kerusakan yang diberikan bertambah sejumlah 80."
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [643],
};

export default card;
