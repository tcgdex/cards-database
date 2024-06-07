import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍王蠍VSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "危害星星"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。將對手的戰鬥寶可夢【中毒】與【麻痺】。因這個【中毒】而放置的傷害指示物的數量改為3個。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "大爆炸之臂"
		},

		effect: {
			'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		},

		damage: "250-",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card