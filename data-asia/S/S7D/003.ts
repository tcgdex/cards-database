import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蓮帽小童"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "住在日照充足的水邊。白天在水草做的床上睡覺，太陽下山後就會出來活動。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "飛濺"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card