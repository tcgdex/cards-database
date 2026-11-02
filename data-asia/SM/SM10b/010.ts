import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "バクーダ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "背中の コブの 火山は １０年ごとに 大噴火 するが 激しく 怒っても 噴火する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ストロングフレア" },
			damage: 150,
			cost: ["Fire", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557201,
			},
		},
	],

	evolveFrom: {
		ja: "ドンメル",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [323],
};

export default card;
