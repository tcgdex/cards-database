import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貓鼬少",
		th: "ยังกูส"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "雖然什麼都吃，但特別偏好活生生的新鮮食物， 會為了尋找獵物而四處遊走。",
		th: "กินได้ทุกอย่างแต่ถ้าเป็นสิ่งที่ยังมีชีวิตและสดใหม่จะดีกว่า ก็เลยเดินกันเป็นขบวนไปตามทางเพื่อหาเหยื่อ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "銳利之牙",
			th: "เขี้ยวคม"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card