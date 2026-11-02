import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "あなぬけのヒモ",
		'zh-tw': "離洞繩",
		th: "เชือกหลบหนี",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分のバトルポケモンをベンチポケモンと入れ替える。（入れ替えは相手からおこない、ベンチがいないプレイヤーは、入れ替えをしない。）",
		'zh-tw': "雙方玩家將自己的戰鬥寶可夢與備戰寶可夢互換。（由對手先進行互換。沒有備戰寶可夢的玩家不用進行互換。）",
		th: "ผู้เล่นทั้งสองฝ่ายต่างฝ่ายต่างสลับโปเกมอนบนตำแหน่งต่อสู้กับโปเกมอนบนเบนช์ฝ่ายตน (ให้ฝ่ายตรงข้ามสลับก่อน ผู้เล่นที่ไม่มีโปเกมอนบนเบนช์ไม่ต้องสลับ)",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533527,
				tcgplayer: 569010,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
