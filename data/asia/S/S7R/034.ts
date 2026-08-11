import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "穿山鼠"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "當皮膚因為濕氣而發脹變軟時，會前往火山地區，趴在因地熱而帶著高溫的地面上烘乾。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "挖回"
		},

		effect: {
			'zh-tw': "查看自己的牌庫上方1張卡，回復原樣。若希望，將那張卡丟棄。"
		},

		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "一同滾動"
		},

		effect: {
			'zh-tw': "造成自己的備戰區的，持有「一同滾動」招式的寶可夢的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card