import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏瑪然特V",
		th: "ซามาเซนตาV"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "王者之勢",
			th: "การเตรียมพร้อมของราชา"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次，若使用，則自己的回合結束。將自己的手牌全部丟棄，從牌庫抽出5張卡。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เมื่อใช้แล้วจะจบเทิร์นฝ่ายเรา ทิ้งการ์ดบนมือฝ่ายเราทั้งหมดที่ตำแหน่งทิ้งการ์ด แล้วจั่วการ์ด 5 ใบจากสำรับการ์ด"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "復仇暴擊",
			th: "รีเวนจ์เบิสต์"
		},

		effect: {
			'zh-tw': "增加對手已經獲得的獎賞卡的張數×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนการ์ดรางวัลที่ฝ่ายตรงข้ามหยิบไปแล้ว x30"
		},

		damage: "120+",
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card