import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燈火幽靈"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "由於牠會在人類臨終時出現，人們因此認為牠是死神 的使者，對牠畏懼不已。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "搖晃燈火"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card