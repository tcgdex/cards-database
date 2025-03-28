import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "カルボウ",
		'zh-tw': "炭小侍",
		'zh-cn': "炭小侍"
	},

	illustrator: "Mékayu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [935],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "戦いになると 火力が 上がり 摂氏１０００度に 達する。 油分の多い 木の実を 好む。",
		'zh-tw': "在進入戰鬥狀態後， 火力會上升至攝氏１０００度。 喜歡吃油脂含量高的樹果。",
		'zh-cn': "在進入戰鬥狀態後， 火力會上升至攝氏１０００度。 喜歡吃油脂含量高的樹果。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "なぐる",
			'zh-tw': "打擊",
			'zh-cn': "打擊"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "かえんほうしゃ",
			'zh-tw': "噴射火焰",
			'zh-cn': "噴射火焰"
		},

		damage: 70,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card