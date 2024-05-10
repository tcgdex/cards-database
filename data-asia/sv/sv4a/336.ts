import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "プクリンex",
		'zh-tw': "胖可丁ex"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ふくらむボディ",
			'zh-tw': "膨脹之軀"
		},

		effect: {
			ja: "このポケモンに特殊エネルギーがついているなら、このポケモンの最大HPは「＋100」される。",
			'zh-tw': "若這隻寶可夢身上附有特殊能量卡，則這隻寶可夢的最大HP「+100」。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "フレンドタックル",
			'zh-tw': "朋友衝撞"
		},

		damage: "90+",

		effect: {
			ja: "この番、手札からサポートを出して使っていたなら、90ダメージ追加。",
			'zh-tw': "在這個回合，若從手牌使出了支援者卡，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card