import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "サーフゴーex",
		'zh-tw': "賽富豪ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 260,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ボーナスコイン",
			'zh-tw': "紅利硬幣"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を1枚引く。このポケモンがバトル場にいるなら、さらに1枚引く。",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫抽出1張卡。若這隻寶可夢在戰鬥場上，則再抽出1張卡。"
		}
	}],

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "ゴールドラッシュ",
			'zh-tw': "淘金潮"
		},

		damage: "50×",

		effect: {
			ja: "自分の手札から基本エネルギーを好きなだけトラッシュし、その枚数×50ダメージ。",
			'zh-tw': "從自己的手牌將任意數量的基本能量卡丟棄，造成其張數×50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card