import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ソルロック",
		'zh-tw': "太陽岩",
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "体を 回転 させると 太陽の ような 光を 放ち 敵の 目を 眩ませる。",
		'zh-tw': "當牠旋轉自己的身體時，會發出太陽般的光芒，讓敵人的眼睛暫時失明。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "サンエナジー",
				'zh-tw': "太陽能量",
			},
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュから[P]エネルギーを1枚選び、自分の「ルナトーン」につける。",
				'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇1張【超】能量卡，附於自己的「月石」身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "かいてんアタック",
				'zh-tw': "迴轉攻擊",
			},
			damage: 50,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687751,
				tcgplayer: 571727,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Illustration rare",
	dexId: [338],
};

export default card;
