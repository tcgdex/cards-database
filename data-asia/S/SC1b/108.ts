import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "灰塵山"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "吃掉的垃圾會在體內轉化為毒素。毒素的成分會隨著吃掉的垃圾而不同。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "浸毒之地"
		},

		effect: {
			'zh-tw': "若場上有競技場卡，則在自己的回合時，可使用1次。將對手的戰鬥寶可夢【中毒】。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "污泥炸彈"
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
