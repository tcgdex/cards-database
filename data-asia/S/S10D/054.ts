import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉奇卡斯"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "在世上流傳著的傳說中， 牠拉動了被繩子所綑綁的大地。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "古代睿智"
		},

		effect: {
			'zh-tw': "若自己的場上有「雷吉洛克」「雷吉艾斯」「雷吉斯奇魯」「雷吉艾勒奇」「雷吉鐸拉戈」，則在自己的回合時可使用1次。從自己的棄牌區選擇最多3張能量卡，附於自己的1隻寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "巨烈破壞"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【VMAX】」，則增加150點傷害。"
		},

		damage: "150+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card