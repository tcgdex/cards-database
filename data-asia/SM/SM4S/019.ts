import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "エモンガ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "マントのような 膜で 滑空。 電気を まき散らして 敵も 味方も 感電 させまくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エネキャッチ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーを3枚、相手に見せてから、手札に加える。",
			},
		},
		{
			name: { ja: "ボルトチェンジ" },
			damage: 30,
			cost: ["Lightning"],
			effect: {
				ja: "このポケモンをベンチの[雷]ポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560331,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [587],
};

export default card;
