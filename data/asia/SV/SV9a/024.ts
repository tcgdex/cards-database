import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "カスミのスターミー",
		'zh-tw': "<小霞的>寶石海星",
		'zh-cn': "<小霞的>寶石海星"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [121],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "体を 高速で 回転させ 海を 泳ぎながら 小さな プランクトンを 吸収する。",
		'zh-tw': "會高速旋轉著身體在 海裡游泳，並且同時 吸食微小的浮游生物。",
		'zh-cn': "會高速旋轉著身體在 海裡游泳，並且同時 吸食微小的浮游生物。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "サドンフラッシュ",
			'zh-tw': "乍然閃光",
			'zh-cn': "乍然閃光"
		},

		damage: "60+",

		effect: {
			ja: "この番に、このポケモンが「カスミのヒトデマン」から進化していたなら、80ダメージ追加。",
			'zh-tw': "在這個回合，若這隻寶可夢從「小霞的海星星」進化，則增加80點傷害。",
			'zh-cn': "在這個回合，若這隻寶可夢從「小霞的海星星」進化，則增加80點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card