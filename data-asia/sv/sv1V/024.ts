import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "アルクジラ",
		'zh-tw': "走鯨"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [974],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "寒冷地で ５匹ほどの 群れを 作って 暮らす。 雪や 氷に 含まれる ミネラルが 大好き。",
		'zh-tw': "在寒冷地帶會組成約５隻規模的群體來生活。 喜歡雪或冰所含的礦物質。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "つらら",
			'zh-tw': "冰柱"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "するどいひれ",
			'zh-tw': "銳利鰭"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card