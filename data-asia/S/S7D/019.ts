import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 閃電鳥"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "擁有能夠一腳踢毀砂石車的強勁腳力。據說能以時速３００公里在山中奔跑。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "健腳充能"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的手牌選擇最多2張【鬥】能量卡，附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "閃踢"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢身上附加的能量全部丟棄。這個情況下，將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 70,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card