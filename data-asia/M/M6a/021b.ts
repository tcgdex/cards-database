import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Greninja ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	evolveFrom: {
		id: "Frogadier"
	},

	attacks: [
		{
			name: {
				id: "Sabetan Gaib"
			},
			cost: ["Water"],
			effect: {
				id: "Serangan ini memberikan kerusakan sejumlah 30 kepada 1 Pokémon lawan untuk tiap Token Kerusakan yang dimiliki Pokémon tersebut. <em>[Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]</em>"
			},
		},
		{
			name: {
				id: "Aqua Edge"
			},
			damage: 160,
			cost: ["Water", "Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Double rare",
	dexId: [658],
};

export default card;
