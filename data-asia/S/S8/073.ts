import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋼鎧鴉"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		'zh-tw': "擁有優秀飛行能力和極度聰明頭腦的牠在伽勒爾地區從事飛翔計程車的工作。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "鋼翼"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		},

		damage: 50,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "能量旋風"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。"
		},

		damage: 160,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card