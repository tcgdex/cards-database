import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "カビゴン",
		'zh-tw': "卡比獸"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	dexId: [143],
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "頑丈な 胃袋は カビの 生えたものや 腐ったものを 食べても 壊れることはない。",
		'zh-tw': "擁有一個結實的胃，即使吃了發霉腐爛的東西， 也完全不會吃壞肚子。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "くいいじ",
			'zh-tw': "貪嘴"
		},

		effect: {
			ja: "自分の番に1回使える。自分のトラッシュから「たべのこし」を2枚まで選び、相手に見せて、手札に加える。",
			'zh-tw': "在自己的回合時可使用1次。從自己的棄牌區選擇最多2張「吃剩的東西」，在給對手看過後加入手牌。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "バッタンプレス",
			'zh-tw': "養肥壓制"
		},

		damage: 130,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card