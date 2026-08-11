import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "袋獸"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "袋獸的母愛很深。如果是為了守護自己的孩子，據說連死都毫不畏懼。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "捲土重來"
		},

		effect: {
			'zh-tw': "若在上個對手的回合，自己的寶可夢因招式的傷害而【氣絕】了，則增加90點傷害。"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "頭突"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
