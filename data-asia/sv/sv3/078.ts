import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "クチート",
		'zh-tw': "大嘴娃"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [303],
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "鋼の ツノが 変形して できた 大きな アゴで 相手に がぶりと 噛みつくのだ。",
		'zh-tw': "大嘴娃能用自己那由鋼角變化而成的巨大顎部將對手一口緊緊咬住。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "スペシャルイーター",
			'zh-tw': "特殊食客"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。",
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "するどいキバ",
			'zh-tw': "銳利之牙"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card