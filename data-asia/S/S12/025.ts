import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷丘",
		th: "ไรชู"
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "長長的尾巴能夠像接地線一樣保護自己，因此即使 是高壓電也不會讓牠麻痺。",
		th: "หางที่ยาวจะทำหน้าที่เป็นสายดินคอยปกป้องตัวเอง มันจึงไม่โดนช็อตแม้จะโดนไฟฟ้าแรงสูง"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "埋伏電光",
			th: "ดักรอสปาร์ก"
		},

		effect: {
			'zh-tw': "若對手已經使出了【VSTAR】力量，則增加100點傷害。",
			th: "ถ้าฝ่ายตรงข้ามใช้พลัง【VSTAR】ไปแล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 100"
		},

		damage: "40+",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "雷電球",
			th: "ไลท์นิงบอล"
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card