import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小箭雀",
		'zh-cn': "小箭雀",
		ja: "ヤヤコマ"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "在山野中和街上生活。 曾為了與怒鸚哥爭地盤， 而在街上展開了大混戰。",
		'zh-cn': "在山野中和街上生活。 曾為了與怒鸚哥爭地盤， 而在街上展開了大混戰。",
		ja: "野山や 街中で 生活する。 イキリンコと 縄張りを 争い 街中で 大乱闘になった。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "送回",
			'zh-cn': "送回",
			ja: "つきかえす"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			'zh-cn': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
		},

		damage: 10,
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
	regulationMark: "H",
	rarity: "Common",
	dexId: [661],

	thirdParty: {
		cardmarket: 779097
	}
}

export default card