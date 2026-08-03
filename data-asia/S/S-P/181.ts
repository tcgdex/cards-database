import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
		'zh-tw': "耿鬼VMAX",
	},

	illustrator: "Tika Matsuno",
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
				'zh-tw': "恐慌恐懼",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札から基本エネルギーを1枚選び、このポケモンにつける。",
				'zh-tw': "造成對手的場上的「寶可夢【V】・【GX】」的數量×60點傷害。",
			},
		},
		{
			name: {
				ja: "かみつく",
				'zh-tw': "超極巨大口吞噬",
			},
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
				tcgplayer: 597379,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [133],
};

export default card;
