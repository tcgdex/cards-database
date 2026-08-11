import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光電傘蜥"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'zh-tw': "在如今已滅亡的沙漠之國曾經是人們珍視的對象。和財寶一起來到了伽勒爾地區。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "怪異電波"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的場上寶可夢身上附加的能量，將其丟棄。"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "打雷"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 120,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
