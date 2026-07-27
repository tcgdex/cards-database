import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "スナバァ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "口の中に 手を 入れた者を 操ってしまう。 砂山の 身体を 大きく させるためだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "すなあつめ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにある[闘]エネルギーを1枚、このポケモンにつける。",
			},
		},
		{
			name: { ja: "すなじごく" },
			damage: 30,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560092,
			},
		},
	],

	retreat: 3,
	rarity: "None",
	dexId: [769],
};

export default card;
