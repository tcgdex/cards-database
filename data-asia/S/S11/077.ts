import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "堅果啞鈴"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "用尖刺刺裂岩壁之後，牠會用觸手的尖端 接觸裂縫吸收營養。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "鞭打粉碎"
		},

		damage: 130,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card