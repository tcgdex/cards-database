import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "古月鳥"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "因為很貪吃，想把整隻肥嘟嘟的刺梭魚吞下去，結果卻卡在了喉嚨裡。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連續一口飛彈"
		},

		effect: {
			'zh-tw': "將自己的備戰區的任意數量的「刺梭魚」丟棄，造成其張數×60點傷害。"
		},

		damage: "60×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card