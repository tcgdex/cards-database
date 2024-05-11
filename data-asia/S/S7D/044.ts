import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "三首惡龍"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],

	description: {
		'zh-tw': "３個頭會輪流去咬敵人。在對方倒下之前，絕對不會停止攻擊。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "龍之反擊"
		},

		effect: {
			'zh-tw': "增加上個對手的回合對手獲得的獎賞卡的張數×100點傷害。"
		},

		damage: "20+",
		cost: ["Psychic", "Darkness"]
	}, {
		name: {
			'zh-tw': "漆黑之牙"
		},

		damage: 210,
		cost: ["Psychic", "Darkness", "Colorless", "Colorless"]
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card