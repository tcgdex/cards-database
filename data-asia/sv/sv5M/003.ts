import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "橡實果",
		th: "ทาเนโบ"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "在牠一動也不動的時候，看起來和樹果一模一樣， 以嚇唬來啄食自己的寶可夢為樂。",
		th: "หากอยู่นิ่ง ๆ ไม่เคลื่อนไหวจะเหมือนผลไม้มาก จะคอยแกล้งให้โปเกมอนที่เข้ามาจิกตกใจเล่น"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "硬化",
			th: "แข็งเกร็ง"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "垂吊",
			th: "ห้อยโตงเตง"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card