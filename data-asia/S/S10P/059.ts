import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "樹枕尾熊"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'zh-tw': "終其一生都處於睡著的狀態。 這是因為牠所吃的葉子裡 含有類似麻醉藥的成分。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "一場夢"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在【睡眠】，則就算受到對手的寶可夢招式的傷害而【氣絕】，對手也無法獲得獎賞卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "倒下"
		},

		effect: {
			'zh-tw': "將這隻寶可夢【睡眠】。"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card