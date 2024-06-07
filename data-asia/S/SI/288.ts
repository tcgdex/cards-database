import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長毛巨魔"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "長毛射擊"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢，受到這隻寶可夢身上附加的【惡】能量的數量×30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "暗之牙"
		},

		damage: 110,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card