import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大嘴娃VSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "星星迴旋曲"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在備戰區，則在自己的回合時可使用。將這隻寶可夢與自己的戰鬥寶可夢互換。然後，選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "乍然食客"
		},

		effect: {
			'zh-tw': "在這個回合，若從備戰區將這隻寶可夢放置於戰鬥場，則增加90點傷害。"
		},

		damage: "90+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card