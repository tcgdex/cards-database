import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泥巴魚",
		th: "มักเกียว",
		ja: "マッギョ"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'zh-tw': "潮間帶便是牠的巢穴。製造電的器官由於 泥裡的細菌而發達起來。",
		th: "อาศัยอยู่บริเวณหาดโคลน เชื้อโรคที่อยู่ในโคลนทำให้ร่างกายพัฒนาอวัยวะสำหรับสร้างกระแสไฟฟ้าขึ้นมา",
		ja: "干潟が すみか。 泥に 棲む 細菌に よって 電気を つくる 器官が 発達した。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "泥巴射擊",
			th: "มัดช็อต",
			ja: "マッドショット"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "神秘伏特",
			th: "มิสเทรีโวลต์",
			ja: "ミステリーボルト"
		},

		effect: {
			'zh-tw': "這個招式只有在自己的棄牌區1張支援者卡都沒有時才可使用。對手的1隻寶可夢受到100點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ท่าต่อสู้นี้ จะใช้ได้แค่ตอนที่บนตำแหน่งทิ้งการ์ดฝ่ายเราไม่มีการ์ดซัพพอร์ตเลยแม้แต่ 1 ใบ ทำแดเมจ 100 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ja: "このワザは、自分のトラッシュにサポートが1枚もないときにしか使えない。相手のポケモン1匹に、100ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [618]
}

export default card