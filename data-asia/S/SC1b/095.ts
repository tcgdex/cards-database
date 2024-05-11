import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 雙彈瓦斯"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "會吸收大氣中的污染成分，然後吐出新鮮的空氣，這就是牠的排泄方式。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "化學變化氣體"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的場上寶可夢的特性（「化學變化氣體」除外）全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "惡棍猛毒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為4個。"
		},

		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
