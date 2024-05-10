import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蟲滾泥",
		th: "ชิกาโรโค"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "會一邊滾著泥巴球，一邊使進化的能量成熟。 最終會迎接進化的時刻。",
		th: "บ่มพลังงานที่ใช้ในการวิวัฒนาการให้สุกไปในขณะที่กลิ้งก้อนโคลน เพื่อรอช่วงเวลาที่จะได้วิวัฒนาการ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞一下",
			th: "จุ้นจ้านหน่อย"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card