import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "流氓熊貓",
		th: "โกรอนดะ"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'zh-tw': "性情暴躁，靠力氣解決問題。為與堵攔熊一對一比拼 而燃燒自己的鬥志。",
		th: "มีนิสัยก้าวร้าว ทำให้ศิโรราบได้ด้วยพละกำลังแขน จิตวิญญาณในการต่อสู้จะลุกโชนเมื่อต่อสู้ตัวต่อตัวกับทาจิฟซากุมะ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "推擊",
			th: "ต่อยตี"
		},

		damage: 60,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "狂野衝撞",
			th: "ไวลด์แทคเคิล"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 30 ด้วย"
		},

		damage: 160,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card