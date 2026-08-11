import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蜈蚣王",
		th: "เพนโดรา"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	description: {
		'zh-tw': "以敏捷的動作追趕敵人，並以頭上的角加以攻擊。在給予致命一擊前絕不罷手。",
		th: "จะไล่ต้อนศัตรูด้วยการเคลื่อนไหวที่ว่องไวแล้วใช้เขาบนหัวโจมตี จะไม่ออมมือจนกว่าจะปลิดชีพได้"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "毒針",
			th: "เหล็กในพิษ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ [พิษ]"
		},

		damage: 50,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "毒液衝擊",
			th: "เวนอมช็อค"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加120點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ [พิษ] การโจมตีนี้จะเพิ่มแดเมจอีก 120"
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