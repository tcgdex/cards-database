import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "バンギラスex",
		'zh-tw': "班基拉斯ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "やまとばし",
			'zh-tw': "飛山"
		},

		damage: 120,

		effect: {
			ja: "自分の山札を上から2枚トラッシュする。",
			'zh-tw': "將自己的牌庫上方2張卡丟棄。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "トールランページ",
			'zh-tw': "索爾亂暴"
		},

		damage: "150+",

		effect: {
			ja: "自分のベンチポケモンにダメカンがのっているなら、100ダメージ追加。",
			'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加100點傷害。"
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