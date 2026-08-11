import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキノオー",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "万年雪が 積もる 山脈で 静かに 暮らす。 ブリザードを 発生させて 姿を 隠す。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じゅひょうのめぐみ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュにある[水]エネルギーを1枚、自分のポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒプノハンマー" },
			damage: 80,
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550616,
			},
		},
	],

	evolveFrom: {
		ja: "ユキカブリ",
	},

	retreat: 3,
	rarity: "None",
	dexId: [460],
};

export default card;
