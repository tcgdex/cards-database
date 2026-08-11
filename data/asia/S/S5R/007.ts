import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "尖牙籠",
		th: "มัสคิปปา"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "會纏繞在生長於潮濕地帶的樹木上，以散發甜甜香氣的唾液吸引獵物靠近，再一口吃掉。",
		th: "จะพันตัวเข้ากับต้นไม้ในแถบร้อนชื้นแล้วล่อให้เหยื่อเข้ามาหาด้วยน้ำลายที่มีกลิ่นหอมหวาน จากนั้นก็กินเหยื่อในคำเดียว"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬緊",
			th: "กัด"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะหนีไม่ได้"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "三連鞭",
			th: "ฟาดแส้สามครั้ง"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×60點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x 60"
		},

		damage: "60×",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card