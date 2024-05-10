import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴースト",
		'zh-tw': "鬼斯通"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [93],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "暗闇にまぎれ ガスの手を 伸ばし 人の肩を 叩くのが 好き。 触られると 震えが 止まらない。",
		'zh-tw': "喜歡躲在黑暗中伸出氣體構成的手去拍人的肩膀。 一旦被接觸到，身體便會抖個不停。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ひとだまがえし",
			'zh-tw': "孤魂返"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のトラッシュからサポートを1枚選び、相手の手札にもどす。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從對手的棄牌區選擇1張支援者卡，放回對手的手牌。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "つぶやく",
			'zh-tw': "囈語"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card