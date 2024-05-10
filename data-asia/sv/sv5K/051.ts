import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "トドロクツキ",
		'zh-tw': "轟鳴月",
		th: "จันทร์คำรน",
		'zh-cn': "轟鳴月"
	},

	illustrator: "hncl",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1005],
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "謎の 多い 探検記の中で トドロクツキという 名で 記された 生物の 可能性が ある。",
		'zh-tw': "牠有可能就是在謎團重重的探險記裡，以轟鳴月這個 名字被記載下來的生物。",
		th: "มีโอกาสที่จะเป็นสิ่งมีชีวิตที่บันทึกไว้ว่าชื่อจันทร์คำรนในบันทึกการสำรวจที่เต็มไปด้วยปริศนา",
		'zh-cn': "牠有可能就是在謎團重重的探險記裡，以轟鳴月這個 名字被記載下來的生物。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "あだうちやばね",
			'zh-tw': "雪恨箭羽",
			th: "ปีกลูกศรสนองแค้น",
			'zh-cn': "雪恨箭羽"
		},

		damage: "70+",

		effect: {
			ja: "自分のトラッシュにある「古代」のカードの枚数×10ダメージ追加。",
			'zh-tw': "增加自己的棄牌區的「古代」卡的張數×10點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนการ์ด [โบราณ] ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา x10",
			'zh-cn': "增加自己的棄牌區的「古代」卡的張數×10點傷害。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スピードウイング",
			'zh-tw': "高速之翼",
			th: "สปีดวิง",
			'zh-cn': "高速之翼"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card