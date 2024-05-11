import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "閃焰王牌"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		'zh-tw': "會將小石頭像足球般用腳挑起，製造出纏繞著火焰的足球。會用猛烈的踢射來燃燒對手。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "火焰球"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: 50,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "燃燒踢"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。"
		},

		damage: 160,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
