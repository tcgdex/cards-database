import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "索偵蟲"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'zh-tw': "總是孜孜不倦地收集情報，所以頭腦相當地聰明，但是力量方面就差了一些。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼朋引伴"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
