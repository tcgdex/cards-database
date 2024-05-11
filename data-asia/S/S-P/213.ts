import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "路卡利歐VSTAR"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "搏鬥肘擊"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】」，則增加120點傷害。"
		},

		damage: "120+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量] 波導星星"
		},

		effect: {
			'zh-tw': "造成對手的場上寶可夢身上附加的能量的數量×70點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		damage: "70×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card