import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "牙牙"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "超進化"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則從自己的牌庫選擇1張「雙斧戰龍」卡，放置於這隻「牙牙」身上完成進化。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card