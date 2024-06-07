import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小山豬",
		ja: "ウリムー"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "擅長靠氣味尋找埋藏於草叢或雪中的菇蕈。自古以來，洗翠的居民便 十分借重牠的此項天賦。",
		ja: "草むら 雪に 埋もれし茸を 匂いにて 探す才に 長ず。 古より ヒスイの地 暮らす者 この才に 頼ること 多し。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踩",
			ja: "ふむ"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "冰凍之風",
			ja: "こごえるかぜ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			ja: "相手のバトルポケモンをねむりにする。"
		},

		damage: 40,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [220]
}

export default card