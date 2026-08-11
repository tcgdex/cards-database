import { Card } from "models/database/card";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグマッグ",
		'zh-tw': "熔岩蟲",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "溶岩で できた 体を 持つ。 絶えず 動いていないと 体が 冷えて 固まってしまうのだ。",
		'zh-tw': "有著由熔岩構成的身體。如果不持續運動， 身體就會因變冷而凝固。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "すいこむ",
				'zh-tw': "吸入",
			},
			cost: ["Fire"],
			effect: {
				'ja-jp': "自分のトラッシュから[R]エネルギーを1枚選び、このポケモンにつける。",
				'zh-tw': "從自己的棄牌區選擇1張【火】能量卡，附於這隻寶可夢身上。",
			},
		},
		{
			name: {
				'ja-jp': "かえん",
				'zh-tw': "烈焰",
			},
			damage: 50,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667890,
				tcgplayer: 569946,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [218],
};

export default card;
