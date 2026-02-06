import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泥偶小人",
		ja: "ゴビット"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "誕生自黏土的古代寶可夢。不知為何，有一些泥偶小人 會不斷地把大石頭排列起來。",
		ja: "粘土から 生み出された 古代の ポケモン。 なぜか 大岩を 並べ続ける ものも いる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "擲泥",
			ja: "どろかけ"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "拍擊",
			ja: "はたく"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F",
	rarity: "Common",
	dexId: [622],

	thirdParty: {
		cardmarket: 605909
	}
}

export default card