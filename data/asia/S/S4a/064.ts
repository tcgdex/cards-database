import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷鳥海獸"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'zh-tw': "牠凍成冰的上半身在顫抖時可以產生電能。非常不擅長走路。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "凍僵旋渦"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，每次對手從手牌將能量附於寶可夢身上，在那隻寶可夢身上放置2個傷害指示物。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "電球"
		},

		damage: 70,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card