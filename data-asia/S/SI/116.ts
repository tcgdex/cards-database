import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "淚眼蜥"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "皮膚在濕掉時會變色， 彷彿像是隱身了一樣， 誰都看不見牠的身影。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連連召喚"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張「連擊」【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "雙重旋轉"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card