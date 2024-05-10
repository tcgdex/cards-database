import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ナマズン",
		'zh-tw': "鯰魚王"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [340],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "縄張り意識が とても 強く 外敵が 近づくと 激しく 地面を 揺らして 襲いかかる。",
		'zh-tw': "地盤意識非常強烈，如果有外敵靠近，就會 劇烈搖晃地面發動襲擊。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "あばれてゆらす",
			'zh-tw': "暴搖"
		},

		effect: {
			ja: "このポケモンについているエネルギーの数ぶん、相手の山札を上からトラッシュする。",
			'zh-tw': "將對手的牌庫上方與這隻寶可夢身上附加的【鬥】能量相同數量的卡丟棄。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ランドクラッシュ",
			'zh-tw': "大地粉碎"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card