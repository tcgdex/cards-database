import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "白海獅"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "進食之後會在沙灘上做日光浴，藉此提高體溫 來幫助消化。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "隨興游水"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "冰塊迴旋"
		},

		effect: {
			'zh-tw': "將自己的場上寶可夢身上附加的任意數量的【水】能量卡放回牌庫，造成其張數×40點傷害。這個情況下，重洗牌庫。"
		},

		damage: "40×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card