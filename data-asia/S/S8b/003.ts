import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大針蜂"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "有時會成群結隊地出現。能以極快的速度飛來飛去， 並用尾部的毒針不斷刺擊對手。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "對點針刺"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上附有特殊能量，則將那隻寶可夢【氣絕】。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "噴射尖槍"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 110,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card