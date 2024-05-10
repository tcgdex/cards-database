import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "コータス",
		'zh-tw': "煤炭龜"
	},

	illustrator: "Kurata So",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [324],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "甲羅の 内側で 石炭を 燃やし 敵に 襲われると 黒い煙を まき散らして 逃げる。",
		'zh-tw': "會在甲殼的內側燃燒煤炭。遭受到敵人攻擊時， 會噴灑黑煙然後逃走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "しゅうちゅうほうか",
			'zh-tw': "集中砲火"
		},

		damage: 80,

		effect: {
			ja: "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×80ダメージ。",
			'zh-tw': "擲與這隻寶可夢身上附加的【火】能量的數量相同次數的硬幣，造成正面出現的次數×80點傷害。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card