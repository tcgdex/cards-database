import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スイクンV",
		'zh-tw': "水君V",
		'th-th': "ซุยคูนV",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

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
				'ja-jp': "ブリザードロンド",
				'zh-tw': "暴雪迴旋曲",
				'th-th': "บลิซาร์ดรอนโด",
			},
			damage: "20+",
			cost: ["Water", "Colorless"],
			effect: {
				'ja-jp': "おたがいのベンチポケモンの数×20ダメージ追加。",
				'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。",
				'th-th': "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ของทั้งสองฝ่าย x20",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687504,
				tcgplayer: 571562,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [245],
};

export default card;
