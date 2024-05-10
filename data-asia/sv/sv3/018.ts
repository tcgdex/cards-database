import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒヒダルマ",
		'zh-tw': "達摩狒狒",
		th: "ฮิฮิดารุมะ"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [555],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "体内の 炎が 燃え盛るほど パワーが 高まる。 その 温度は １４００度を 超える ことも。",
		'zh-tw': "體內的火焰燃得越旺，力量就越大。火焰的溫度有時甚至能超過１４００度。",
		th: "ยิ่งเปลวไฟในร่างกายลุกโพลง พลังก็จะยิ่งเพิ่มสูงขึ้น อุณหภูมินั้นอาจสูงเกิน 1400 องศา"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "カンカンパンチ",
			'zh-tw': "鏗鏗拳",
			th: "หมัดพลุ่งพล่าน"
		},

		damage: "60+",

		effect: {
			ja: "このポケモンにダメカンがのっているなら、60ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加60點傷害。",
			th: "ถ้าโปเกมอนนี้มีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 60"
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヒートブラスト",
			'zh-tw': "高溫爆破",
			th: "ฮีทบลาสต์"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card