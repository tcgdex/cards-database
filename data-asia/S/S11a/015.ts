import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "萊希拉姆V"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "璀璨之翼"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，附於自己的1隻寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "皎白火焰"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 200,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card