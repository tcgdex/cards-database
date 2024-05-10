import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "アルクジラ",
		'zh-tw': "走鯨"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [974],
	hp: 80,
	types: ["Water"],

	description: {
		ja: "寒冷地で ５匹ほどの 群れを 作って 暮らす。 雪や 氷に 含まれる ミネラルが 大好き。",
		'zh-tw': "在寒冷地帶會組成約５隻規模的群體來生活。 喜歡雪或冰所含的礦物質。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card