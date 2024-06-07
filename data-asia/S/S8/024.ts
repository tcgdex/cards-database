import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "獵斑魚"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "棲息在深海中。傳說如果有獵斑魚被沖上沙灘，就會有不好的事發生。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "妨礙一擊者"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，對手的「一擊」寶可夢使用招式所需的能量增加1個【無】能量。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "深咬"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card