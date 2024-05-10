import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャース",
		'zh-tw': "喵喵"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	dexId: [52],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "昼間は 寝てばかりいる。 夜になると 目が 輝き 縄張りを 歩きまわる。",
		'zh-tw': "白天一直都在睡覺。到了晚上眼睛就會發光， 在自己的地盤徘徊。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "まねきねこ",
			'zh-tw': "招財貓"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ツメをたてる",
			'zh-tw': "豎爪"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card