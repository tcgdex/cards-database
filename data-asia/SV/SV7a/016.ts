import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "走鯨",
		'zh-cn': "走鯨",
		ja: "アルクジラ"
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'zh-tw': "在寒冷地帶會組成 約５隻規模的群體來生活。 喜歡雪或冰所含的礦物質。",
		'zh-cn': "在寒冷地帶會組成 約５隻規模的群體來生活。 喜歡雪或冰所含的礦物質。",
		ja: "寒冷地で ５匹ほどの 群れを 作って 暮らす。 雪や 氷に 含まれる ミネラルが 大好き。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸取鰭",
			'zh-cn': "吸取鰭",
			ja: "ドレインフィン"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「20」HP。",
			'zh-cn': "將這隻寶可夢恢復「20」HP。",
			ja: "このポケモンのHPを「20」回復する。"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [974]
}

export default card