import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 喵喵"
	},

	illustrator: "313",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "額頭上的金幣越黑就越硬，也越能受到夥伴的尊敬。性情勇猛，什麼都不怕。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "叫聲"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-20」點。"
		},

		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "劈開"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card