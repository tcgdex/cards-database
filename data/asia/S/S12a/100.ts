import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "オリジンディアルガV",
		'zh-tw': "起源帝牙盧卡V",
		th: "ดีอัลกาดั้งเดิมV",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "メタルコーティング",
				'zh-tw': "金屬塗層",
				th: "เมทัลโค้ตติ้ง",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから[M]エネルギーを2枚まで選び、このポケモンにつける。",
				'zh-tw': "從自己的棄牌區選擇最多2張【鋼】能量卡，附於這隻寶可夢身上。",
				th: "เลือกการ์ดพลังงาน[โลหะ]ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้",
			},
		},
		{
			name: {
				ja: "じかんだんぜつ",
				'zh-tw': "時間斷絕",
				th: "หยุดเวลา",
			},
			damage: 180,
			cost: ["Metal", "Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687662,
				tcgplayer: 571638,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [483],
};

export default card;
