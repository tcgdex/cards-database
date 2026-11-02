import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
		'zh-tw': "洛奇亞VSTAR",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "不安定な 遺伝子の おかげで さまざまな 進化の 可能性を 秘めている 特殊な ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "じゅんびする",
				'zh-tw': "風暴俯衝",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札から基本エネルギーを1枚選び、このポケモンにつける。",
				'zh-tw': "若希望，將場上的競技場卡丟棄。",
			},
		},
		{
			name: { ja: "かみつく" },
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597404,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [133],
};

export default card;
