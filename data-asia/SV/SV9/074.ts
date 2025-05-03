import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "Nのレシラム",
		'zh-tw': "N的萊希拉姆",
		'zh-cn': "N的萊希拉姆"
	},

	illustrator: "rika",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [643],
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "人が 真実を 蔑ろにして 欲に まみれると 炎で 国を 焼きつくすと 神話に 描かれた。",
		'zh-tw': "在神話的敘述裡，如果人類 蔑視真實、放縱欲望，牠就會 用火焰燒盡他們的王國。",
		'zh-cn': "在神話的敘述裡，如果人類 蔑視真實、放縱欲望，牠就會 用火焰燒盡他們的王國。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Lightning"],

		name: {
			ja: "パワーレイジ",
			'zh-tw': "強力激怒",
			'zh-cn': "強力激怒"
		},

		damage: "20×",

		effect: {
			ja: "このポケモンにのっているダメカンの数×20ダメージ。",
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×20點傷害。",
			'zh-cn': "造成這隻寶可夢身上放置的傷害指示物的數量×20點傷害。"
		}
	}, {
		cost: ["Fire", "Fire", "Lightning", "Colorless"],

		name: {
			ja: "イノセントフレイム",
			'zh-tw': "純真火焰",
			'zh-cn': "純真火焰"
		},

		damage: 170
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card