import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電海燕"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "會在海岸的懸崖上築巢。 吃起來劈哩啪啦跳的神奇口感， 讓牠的巢成了受歡迎的珍奇美食。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card