import { Card } from "../../../interfaces"
import Set from "../SVHK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙鐵皮",
		th: "ขนทราย",
		id: "Sandy Shocks"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "無捕獲紀錄。資料不足。其特徵與某本探險記裡 所記載的生物一致。",
		th: "ไม่มีบันทึกการถูกจับ ข้อมูลไม่เพียงพอ มีลักษณะเด่นที่ตรงกับสิ่งมีชีวิตที่ถูกจดไว้ในบันทึกการสำรวจ",
		id: "Laporan penangkapannya tidak ada dan data terkait Pokémon ini kurang. Ia mirip dengan makhluk hidup yang tertera dalam suatu jurnal ekspedisi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "磁場炸裂",
			th: "สนามแม่เหล็กระเบิด",
			id: "Runtunan Daerah Magnet"
		},

		effect: {
			'zh-tw': "若自己的場上的能量有3個以上，則增加70點傷害。這個招式的傷害不計算弱點。",
			th: "ถ้าบนกระดานฝ่ายเรามีพลังงานมากกว่าหรือเท่ากับ 3 ลูก การโจมตีนี้จะเพิ่มแดเมจอีก 70 แดเมจของท่าต่อสู้นี้จะไม่นำจุดอ่อนมาคิด",
			id: "Jika ada 3 Energi atau lebih di Arena sendiri, kerusakan yang diberikan bertambah sejumlah 70. Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan."
		},

		damage: "20+",
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "力量寶石",
			th: "พาวเวอร์เจม",
			id: "Power Gem"
		},

		damage: 60,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card