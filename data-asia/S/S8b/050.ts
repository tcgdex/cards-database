import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "閃電鳥"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'zh-tw': "據說藏身在雷雲中的傳說的寶可夢。能夠隨心所欲地操縱雷電。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "啄鑽"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "狙擊雷電"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄，對手的1隻「寶可夢【V】・【GX】」受到160點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card