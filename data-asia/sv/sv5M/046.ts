import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵啞鈴",
		th: "ดันบัล"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "會從臀部放出磁力將敵人迅猛地吸到身邊， 再以銳利的爪子刺穿對方。",
		th: "ปล่อยอำนาจแม่เหล็กออกมาทางก้น ดูดเอาศัตรูให้พุ่งเข้าหาและเสียบทะลุด้วยกรงเล็บอันแหลมคม"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "豎爪",
			th: "กางกรงเล็บ"
		},

		damage: 10,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "鐵之衝撞",
			th: "ไอออนแท็กเกิล"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย"
		},

		damage: 50,
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

	retreat: 1,
	regulationMark: "H"
}

export default card