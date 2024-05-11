import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炎帝V",
		ja: "エンテイV"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "瞬步",
			ja: "しゅんそく"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。從自己的牌庫抽出1張卡。",
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を1枚引く。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "燃燒迴旋曲",
			ja: "バーニングロンド"
		},

		effect: {
			'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。",
			ja: "おたがいのベンチポケモンの数×20ダメージ追加。"
		},

		damage: "20＋",
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card