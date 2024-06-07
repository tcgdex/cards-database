import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燈火幽靈"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "由於牠會在人類臨終時出現，人們因此認為牠是死神的使者，對牠畏懼不已。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "首發進場"
		},

		effect: {
			'zh-tw': "在自己的回合開始，從牌庫抽出了這張卡時，若自己的備戰區有空位，則在加入手牌前可使用1次。將這張卡放置於自己的備戰區。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "再烤一次"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張【火】能量卡，附於自己的寶可夢身上。"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
