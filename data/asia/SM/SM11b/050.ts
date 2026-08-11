import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コータス",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'ja-jp': "甲羅から 噴きだす 煙で 体調が わかる。 勢いが 激しいときは 元気な 証拠。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ファイヤートス" },
			cost: ["Fire"],
			effect: {
				'ja-jp': "自分のトラッシュにある[炎]エネルギーを4枚、相手に見せてから、手札に加える。",
			},
		},
		{
			name: { ja: "メラメラ" },
			damage: 100,
			cost: ["Fire", "Fire", "Fire"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、1個トラッシュする。その後、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555254,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Character Rare",
	dexId: [324],
};

export default card;
