import { Card } from "../../../interfaces"
import Set from "../SPZ"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啪嚓海膽",
		ja: "バチンウニ"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "能從刺的尖端放電。會用銳利的牙齒刮取附在岩石上的海藻來吃。",
		ja: "棘の 先から 電気を 放つ。 鋭い 歯で 岩に ついた 海藻を こそいで 食べる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼朋引伴",
			ja: "なかまをよぶ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "連續滾動",
			ja: "れんぞくころがり"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，增加正面出現的次數×30點傷害。",
			ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [871]
}

export default card