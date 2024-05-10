import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤドラン",
		'zh-tw': "呆殼獸"
	},

	illustrator: "OKACHEKE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [80],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "ヤドンが 海へ エサを 取りにいったとき シェルダーに 尻尾を かまれ ヤドランになった。",
		'zh-tw': "呆呆獸去海裡捕食時，被大舌貝咬住了尾巴， 於是就變成了呆殼獸。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "おおあくび",
			'zh-tw': "大哈欠"
		},

		effect: {
			ja: "おたがいのバトルポケモンを、それぞれねむりにする。",
			'zh-tw': "將雙方的戰鬥寶可夢【睡眠】。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "のんびりタックル",
			'zh-tw': "悠哉衝撞"
		},

		damage: 160,

		effect: {
			ja: "この番、このポケモンに進化していたなら、このワザは失敗。",
			'zh-tw': "在這個回合，若進化成這隻寶可夢，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card