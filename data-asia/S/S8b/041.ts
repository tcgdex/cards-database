import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰砌鵝"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "頭上的毛連接著大腦的表層，一旦開始動腦思考就會產生冷氣。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "冰塊滑梯"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到自己的場上寶可夢身上附加的「匯流能量」的數量×40點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "冰柱飛彈"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card