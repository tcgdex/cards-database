import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "一擊武道熊師VMAX"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "正拳突"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "超極巨奪命一擊"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		},

		damage: 270,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card