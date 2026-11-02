import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーブル",
		'zh-tw': "圖圖犬",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "シッポの 先から でる 体液で マークを えがく。 マークに よっては マニアに 高値で 取引される。",
		'zh-tw': "會用尾巴前端分泌出的液體畫下標記。其中有些標記會吸引愛好者以高價買賣。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "いろいろパレット",
				'zh-tw': "五顏六色調色盤",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を上から5枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモン1匹につける。残りのカードは山札にもどして切る。",
				'zh-tw': "查看自己的牌庫上方5張卡，從其中選擇任意數量的基本能量卡，附於自己的1隻寶可夢身上。將剩餘卡放回牌庫並重洗。",
			},
		},
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673052,
				tcgplayer: 570817,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570900,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [235],
};

export default card;
