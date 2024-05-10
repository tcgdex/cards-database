import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナカヌチャン",
		'zh-tw': "巧鍛匠"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	dexId: [958],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "大きくて 頑丈な ハンマーを 作るために キリキザンの 群れを 襲って 金属を 集める。",
		'zh-tw': "為了製作又大又堅固的錘子，會去襲擊劈斬司令 的群體，藉以收集金屬。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "じゃれつく",
			'zh-tw': "嬉鬧"
		},

		damage: "30+",

		effect: {
			ja: "コインを1回投げオモテなら、30ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ふんさいプレス",
			'zh-tw': "粉碎壓制"
		},

		damage: 60,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card