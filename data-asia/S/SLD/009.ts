import { Card } from "../../../interfaces"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "好啦魷",
		ja: "マーイーカ"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		'zh-tw': "旋轉著閃爍自己的發光體。透過改變閃爍的方式來和其他夥伴交流。",
		ja: "回転しながら 発光体を 点滅。 光の パターンで 仲間と コミュニケーションする。"
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

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "撞擊",
			ja: "たいあたり"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [686]
}

export default card