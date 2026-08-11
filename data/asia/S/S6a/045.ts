import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "愛管侍"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'zh-tw': "為了收集感謝之情而為人和寶可夢貼心服務。雌性十分擅長帶孩子。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼朋引伴"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "愛心標誌"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card