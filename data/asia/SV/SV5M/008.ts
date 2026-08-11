import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シキジカ",
		'zh-tw': "四季鹿",
		'th-th': "ชิคิจิกะ",
	},

	illustrator: "Rond",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "季節で 匂いも 変化する。 この姿の シキジカは しっとり 甘く 鼻に 残る 香りだ。",
		'zh-tw': "隨著季節，氣味也會有變化。這個樣子的四季鹿散發的氣味 香甜濃郁，會持續蔓延在鼻內。",
		'th-th': "กลิ่นของชิคิจิกะจะเปลี่ยนไปตามฤดูกาล ชิคิจิกะในร่างนี้จะมีกลิ่นหวานนวลติดจมูก",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "はねまわる",
				'zh-tw': "活蹦亂跳",
				'th-th': "สะบัดตัว",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "らくようタックル",
				'zh-tw': "落葉衝撞",
				'th-th': "ใบไม้ร่วงกระแทก",
			},
			damage: 40,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[G]エネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的【草】能量，將其丟棄。",
				'th-th': "เลือกพลังงาน[หญ้า]ที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752889,
				tcgplayer: 566159,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [585],
};

export default card;
