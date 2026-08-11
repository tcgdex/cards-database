import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 踏冰人偶",
		th: "กาลาร์ บาลิโคโอรุ"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "幽默的動作使牠獲得了眾人的喜愛。能從腹部的圖案釋放出精神力量。",
		th: "เป็นที่นิยมเพราะมีท่าทีเคลื่อนไหวที่น่าขบขัน ปลดปล่อยพลังจิตออกมาจากลวดลายบนท้อง"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "球戲法",
			th: "บอลจักกลิ้ง"
		},

		effect: {
			'zh-tw': "從自己的手牌將任意數量的名稱中有「球」的物品卡丟棄，增加其張數×40點傷害。",
			th: "นำการ์ดไอเท็มที่ในชื่อมีคำว่า [บอล] จากการ์ดบนมือฝ่ายเราตามจำนวนที่ชอบทิ้งที่ตำแหน่งทิ้งการ์ด แดเมจจะเพิ่มขึ้นตามจำนวนใบนั้น x 40"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "冰霜粉碎",
			th: "ฟรอสต์สแมช"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card