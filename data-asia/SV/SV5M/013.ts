import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "怖納噬草",
		th: "อาโนะโฮรากุสะ"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "會在乾燥地帶流浪。有極低的機率會大量出現， 把一整座城鎮塞得滿滿滿。",
		th: "เคลื่อนไปอย่างไร้จุดหมายในพื้นที่แห้งแล้ง นาน ๆ ทีจะปรากฏตัวขึ้นมาเป็นจำนวนมากจนกลืนหมู่บ้านทั้งหมู่บ้านหายไป"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "雜草魂",
			th: "จิตวิญญาณแห่งวัชพืช"
		},

		effect: {
			'zh-tw': "這隻寶可夢的最大HP，依對手已經獲得的獎賞卡每1張「+50」。",
			th: "HP สูงสุดของโปเกมอนนี้จะถูก [+50] ต่อการ์ดรางวัล 1 ใบที่ฝ่ายตรงข้ามหยิบไปแล้ว"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "強力尖刺",
			th: "พาวเวอร์ฟูลนีดเดิ้ล"
		},

		effect: {
			'zh-tw': "擲與這隻寶可夢身上附加的能量的數量相同次數的硬幣，造成正面出現的次數×80點傷害。",
			th: "ทอยเหรียญตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนนี้ แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x80"
		},

		damage: "80×",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card