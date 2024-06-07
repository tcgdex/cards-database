import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "堅果啞鈴"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'zh-tw': "用尖刺刺裂岩壁之後，牠會用觸手的尖端接觸裂縫吸收營養。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "嗡嗡橫掃"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上附加的【鋼】能量的數量×30點傷害。將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: "30×",
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card