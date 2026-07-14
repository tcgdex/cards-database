import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "モグリュー",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "体を スピンさせることで 時速５０キロの スピードのまま まっすぐ 地面を 掘り進む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "ツメをたてる" },
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [529],

	thirdParty: {
		cardmarket: 888299,
	},
};

export default card;
