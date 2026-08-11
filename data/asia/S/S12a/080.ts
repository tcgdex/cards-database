import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ファイヤーV",
		'zh-tw': "伽勒爾 火焰鳥V",
		th: "กาลาร์ ไฟเยอร์V",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "じゃえんのつばさ",
				'zh-tw': "邪焰之翼",
				th: "ปีกแห่งเปลวเพลิงดุร้าย",
			},
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュから[悪]エネルギーを1枚選び、このポケモンにつける。この番、すでに別の「じゃえんのつばさ」を使っていたなら、この特性は使えない。",
				'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇1張【惡】能量卡，附於這隻寶可夢身上。在這個回合，若已經使出了其他的「邪焰之翼」，則這個特性無法使用。",
				th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดพลังงาน [ความมืด] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ ในเทิร์นนี้ ถ้าใช้ [ปีกแห่งเปลวเพลิงดุร้าย] ใบอื่นไปแล้ว จะใช้ความสามารถนี้ไม่ได้",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "オーラバーン",
				'zh-tw': "氣場烈焰",
				th: "ออร่าเบิร์น",
			},
			damage: 190,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
				th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 30 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687642,
				tcgplayer: 571618,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [146],
};

export default card;
