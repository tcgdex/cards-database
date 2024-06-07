import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨牙鯊"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "以１２０公里的時速追逐獵物，再用連鐵都能咬碎的牙齒捕殺。人稱牠為大海惡霸。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "水流噴射"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 50,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
