import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉奇卡斯V",
		th: "เรจิกิกัสV",
		ja: "レジギガスV"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 240,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "頭突",
			th: "ตบหนัก",
			ja: "ぶちかます"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "憤怒懲處",
			th: "ค้อนฉุนเฉียว",
			ja: "ふんぬのてっつい"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。將這隻寶可夢【混亂】。",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10 ทำให้โปเกมอนนี้เป็นสภาวะ[สับสน]",
			ja: "このポケモンにのっているダメカンの数×10ダメージ追加。このポケモンをこんらんにする。"
		},

		damage: "100＋",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card