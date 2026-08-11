import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷丘"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'zh-tw': "如果電囊空了，牠就會直直地豎起尾巴，收集空氣中的電流。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "大閃雷"
		},

		effect: {
			'zh-tw': "雙方的場上的所有「寶可夢【V】・【GX】」各受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "十萬伏特"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。"
		},

		damage: 180,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card