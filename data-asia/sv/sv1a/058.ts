import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジヘッド",
		'zh-tw': "雙首暴龍"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [634],
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "頭どうしの 仲は 悪い。 ２つの 頭を 可愛がらないと 嫉妬で 大喧嘩を 始める。",
		'zh-tw': "２顆頭的感情很差。如果兩邊疼愛的程度不同， 就會因爭風吃醋而開始大吵。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ともだちをさがす",
			'zh-tw': "尋找朋友"
		},

		effect: {
			ja: "自分の山札からポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "とびだしヘッド",
			'zh-tw': "魯莽頭擊"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card