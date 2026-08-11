import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "千面避役"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'zh-tw': "能從指尖射出速度高達３馬赫 的水槍。牠的瞬膜能幫助牠看穿 敵人的弱點，準確地擊中要害。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "快速射擊手"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。在對手的1隻寶可夢身上放置2個傷害指示物。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "攀瀑"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card