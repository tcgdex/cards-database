import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風鈴鈴"
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "叫聲會在身體的空洞裡 迴盪出美麗的音色， 趕走被嚇到的敵人。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "巨聲"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "回家鐘聲"
		},

		effect: {
			'zh-tw': "選擇1隻自己的備戰寶可夢，將那隻寶可夢與附加的卡全部放回牌庫並重洗。"
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card