import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "流氓熊貓"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'zh-tw': "透過葉子來洞悉敵人的動向。只要使出一記拳擊就能讓大型砂石車變成廢鐵。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "敲擊之錘"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方1張卡丟棄。"
		},

		damage: 90,
		cost: ["Darkness", "Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "恐嚇掠奪"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。"
		},

		damage: 150,
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card