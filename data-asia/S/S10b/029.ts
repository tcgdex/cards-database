import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "閃電鳥"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "能夠自在地操縱雷電。相傳牠的巢穴就在烏黑的雷雲之中。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "電氣象徵"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的【雷】屬性的【基礎】寶可夢（「閃電鳥」 除外）使用的招式，對對手的戰鬥寶可夢造成的傷害「+10」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "雷電球"
		},

		damage: 110,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card