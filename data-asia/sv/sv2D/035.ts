import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "デカヌチャンex",
		'zh-tw': "巨鍛匠ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Psychic"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ビッグハンマー",
			'zh-tw': "大錘"
		},

		damage: "30×",

		effect: {
			ja: "自分の手札の枚数×30ダメージ。",
			'zh-tw': "造成自己的手牌的張數×30點傷害。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ふんさいプレス",
			'zh-tw': "粉碎壓制"
		},

		damage: 140,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card