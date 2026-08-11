import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 堵攔熊"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	description: {
		'zh-tw': "能夠發出驚人的音量。牠在大叫的同時威嚇對手的樣子被稱為「攔堵」。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "暴躁嚎叫"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。在對手的1隻寶可夢身上放置3個傷害指示物。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "攔堵"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。"
		},

		damage: 90,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card