import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "フローゼル",
		'zh-tw': "浮潛鼬"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [419],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "浮き袋を ふくらませると 人を 背中に 乗せることが できる。 浮き袋を しぼませて 潜る。",
		'zh-tw': "膨脹起浮囊後就能讓人坐在自己背上。 排出浮囊的氣來潛水。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "うずまきテール",
			'zh-tw': "漩渦尾"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンと、ついているすべてのカードを、相手の手札にもどす。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢與附加的卡，全部放回對手的手牌。"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "たきのぼり",
			'zh-tw': "攀瀑"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card