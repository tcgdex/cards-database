import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "雙頰上有儲存電力的囊袋。一旦生氣就會把儲存的電力 一口氣釋放出來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "叫聲"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-20」點。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "皮卡伏特"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card