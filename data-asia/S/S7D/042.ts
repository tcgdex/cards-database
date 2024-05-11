import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "單首龍"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		'zh-tw': "因為眼睛看不見，所以會又撞又咬，來判斷四周的狀況。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼朋引伴"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "咬住"
		},

		damage: 30,
		cost: ["Psychic", "Darkness"]
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card