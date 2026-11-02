import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ターボパッチ",
		'zh-tw': "渦輪修正檔",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、自分のトラッシュから基本エネルギーを1枚選び、自分のたねポケモン（「ポケモンGX」をのぞく）につける。",
		'zh-tw': "擲1次硬幣若為正面，則從自己的棄牌區選擇1張基本能量卡，附於自己的【基礎】寶可夢（「寶可夢【GX】」 除外）身上。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586652,
				tcgplayer: 571389,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578417,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "D",
	rarity: "None",
};

export default card;
