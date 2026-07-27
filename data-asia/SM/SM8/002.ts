import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "チコリータ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "頭の 葉っぱで まわりの 温度や 湿度を 探る。 日差しを 浴びることが 大好き。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうごうせい" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[草]エネルギーを1枚、自分のポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "はっぱカッター" },
			damage: 20,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558641,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [152],
};

export default card;
