import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エンテイV",
		'zh-tw': "炎帝V",
		'th-th': "เอ็นเตV",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "しゅんそく",
				'zh-tw': "瞬步",
				'th-th': "ฝีเท้าเร็ว",
			},
			effect: {
				'ja-jp': "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を1枚引く。",
				'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。從自己的牌庫抽出1張卡。",
				'th-th': "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "バーニングロンド",
				'zh-tw': "燃燒迴旋曲",
				'th-th': "เบิร์นนิ่งรอนโด",
			},
			damage: "20+",
			cost: ["Fire", "Colorless"],
			effect: {
				'ja-jp': "おたがいのベンチポケモンの数×20ダメージ追加。",
				'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。",
				'th-th': "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ของทั้งสองฝ่าย x20",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687499,
				tcgplayer: 571557,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [244],
};

export default card;
