import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "トドロクツキ",
		id: "Roaring Moon",
		th: "จันทร์คำรน",
		'zh-tw': "轟鳴月",
		'zh-cn': "轟鳴月"
	},

	illustrator: "hncl",
	rarity: "None",
	category: "Pokemon",
	dexId: [1005],
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "謎の 多い 探検記の中で トドロクツキという 名で 記された 生物の 可能性が ある。",
		id: "Terdapat kemungkinan Pokémon ini adalah makhluk hidup bernama Roaring Moon yang tertulis dalam jurnal ekspedisi yang penuh misteri.",
		th: "มีโอกาสที่จะเป็นสิ่งมีชีวิตที่บันทึกไว้ว่าชื่อจันทร์คำรนในบันทึกการสำรวจที่เต็มไปด้วยปริศนา",
		'zh-tw': "牠有可能就是在謎團重重的 探險記裡，以轟鳴月這個 名字被記載下來的生物。",
		'zh-cn': "牠有可能就是在謎團重重的 探險記裡，以轟鳴月這個 名字被記載下來的生物。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "あだうちやばね",
			id: "Bulu Panah Pembalasan",
			th: "ปีกลูกศรสนองแค้น",
			'zh-tw': "雪恨箭羽",
			'zh-cn': "雪恨箭羽"
		},

		damage: "70+",

		effect: {
			ja: "自分のトラッシュにある「古代」のカードの枚数×10ダメージ追加。",
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap lembar kartu Purba yang ada di Trash sendiri.",
			th: "แดเมจจะเพิ่มตามจำนวนการ์ด [โบราณ] ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา x10",
			'zh-tw': "增加自己的棄牌區的「古代」卡的張數×10點傷害。",
			'zh-cn': "增加自己的棄牌區的「古代」卡的張數×10點傷害。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スピードウイング",
			id: "Speed Wing",
			th: "สปีดวิง",
			'zh-tw': "高速之翼",
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