import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水君V",
		th: "ซุยคูนV",
		ja: "スイクンV"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "瞬步",
			th: "ฝีเท้าเร็ว",
			ja: "しゅんそく"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。從自己的牌庫抽出1張卡。",
			th: "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を1枚引く。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "暴雪迴旋曲",
			th: "บลิซาร์ดรอนโด",
			ja: "ブリザードロンド"
		},

		effect: {
			'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ของทั้งสองฝ่าย x20",
			ja: "おたがいのベンチポケモンの数×20ダメージ追加。"
		},

		damage: "20＋",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare"
}

export default card