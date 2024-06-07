import { Card } from "../../../interfaces"
import Set from "../SJ"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胡帕"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "用圓環將喜歡的東西傳送到秘密的住處。 會鑽進圓環瞬間移動。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "進擊之門"
		},

		effect: {
			'zh-tw': "在這個回合，若沒有從備戰區將這隻寶可夢放置於戰鬥場，則這個招式失敗。這個招式的傷害不計算弱點。"
		},

		damage: 90,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card