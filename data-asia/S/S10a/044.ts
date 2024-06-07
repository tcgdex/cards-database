import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑暗鴉"
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "會為了老大尋找閃閃發亮的東西。被人們視為不吉利的象徵， 厭惡牠的人也很多。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "群聚"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張「黑暗鴉」卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "啄"
		},

		damage: 10,
		cost: ["Darkness"]
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
	regulationMark: "F"
}

export default card