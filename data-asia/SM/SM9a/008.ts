import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドククラゲ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "赤い 玉から 超音波を 発生させ 獲物を 弱らせると ８０本の 触手を 巻きつける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いけずなしょくしゅ" },
			cost: ["Colorless"],
			effect: {
				ja: "相手の場のポケモンについているエネルギーを1個、相手の別のポケモンにつけ替える。その後、つけ替えたポケモンにダメカンを3個のせる。",
			},
		},
		{
			name: { ja: "まきつく" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558195,
			},
		},
	],

	evolveFrom: {
		ja: "メノクラゲ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [73],
};

export default card;
