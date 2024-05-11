import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "垃垃藻",
		th: "คูซูโม"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "會混在海藻屑裡漂浮在大海，並且捕獵來吃海藻的寶可夢， 當作大餐飽吃一頓。",
		th: "ลอยอยู่ในทะเลปะปนไปกับเศษสาหร่าย เพื่อคอยล่าโปเกมอนที่มากินสาหร่ายเอาไว้เป็นลาภปาก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "溶解",
			th: "หลอมละลาย"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card