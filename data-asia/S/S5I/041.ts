import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 呆殼獸",
		th: "กาลาร์ ยาโดรัน"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "當牠捏住咬著自己的大舌貝的舌頭，螺旋狀的貝殼尖端就會噴射出有劇毒的液體。",
		th: "พอจับลิ้นของเชลเดอร์ตอนที่กำลังจะงับได้ ก็จะยิงของเหลวพิษรุนแรงออกมาโจมตีจากปลายวงเกลียวของเปลือกหอย"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "噴濺毒",
			th: "พิษกระเด็น"
		},

		effect: {
			'zh-tw': "將雙方的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย แต่ละตัวเป็นสภาวะ [พิษ]"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "歇斯底里之錘",
			th: "ฮีสเทอริกแฮมเมอร์"
		},

		effect: {
			'zh-tw': "若這隻寶可夢處於特殊狀態，則增加120點傷害。",
			th: "ถ้าโปเกมอนนี้เป็นสภาวะผิดปกติ การโจมตีนี้จะเพิ่มแดเมจอีก 120"
		},

		damage: "100+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card