import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吉雉雞ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "‌‌[特性]扭轉乾坤"
		},

		effect: {
			'zh-tw': "在上個對手的回合，若自己的寶可夢【昏厥】了，則在自己的回合時可使用1次。從自己的牌庫抽出3張卡。在這個回合，若已經使出了其他的「扭轉乾坤」，則這個特性無法使用。"
		}
	}, {
		name: {
			'zh-tw': "殘酷箭"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到100點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card