import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "怒鸚哥",
		'zh-cn': "怒鸚哥",
		ja: "イキリンコ"
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "喜歡棲息在街上。 會以羽毛的顏色組隊， 展開爭奪地盤之戰。",
		'zh-cn': "喜歡棲息在街上。 會以羽毛的顏色組隊， 展開爭奪地盤之戰。",
		ja: "街中で 暮らすことを 好む。 羽の 色で グループを 作り 縄張り争いを 繰り広げる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "推倒",
			'zh-cn': "推倒",
			ja: "つきとばす"
		},

		effect: {
			'zh-tw': "若希望，將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			'zh-cn': "若希望，將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			ja: "のぞむなら、相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [931]
}

export default card