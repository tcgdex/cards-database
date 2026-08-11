import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ライコウV",
		'zh-tw': "雷公V",
		'th-th': "ไรโคV",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],

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
				'ja-jp': "ライトニングロンド",
				'zh-tw': "雷電迴旋曲",
				'th-th': "ไลท์นิงรอนโด",
			},
			damage: "20+",
			cost: ["Lightning", "Colorless"],
			effect: {
				'ja-jp': "おたがいのベンチポケモンの数×20ダメージ追加。",
				'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。",
				'th-th': "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ของทั้งสองฝ่าย x20",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687518,
				tcgplayer: 571576,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [243],
};

export default card;
