import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大嘴娃",
		th: "คูชีท"
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "用溫順的長相讓對手大意，然後用大顎一口咬住對手。 咬住後就絕不會鬆口。",
		th: "ทำให้คู่ต่อสู้ตายใจด้วยใบหน้าดูสงบเสงี่ยม แล้วจึงขย้ำด้วยกรามใหญ่ เมื่อกัดแล้วจะไม่ปล่อยเด็ดขาด"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "誘導敲詐",
			th: "ล่อมากรรโชก"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到30點傷害。",
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้ หลังจากนั้น ทำแดเมจ 30 กับโปเกมอนที่เพิ่งออกมาใหม่"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "銳利之牙",
			th: "เขี้ยวคม"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card