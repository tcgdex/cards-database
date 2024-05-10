import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "浩大鯨"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		'zh-tw': "會集中冰能量使上顎的角變得超低溫，然後將自己 附近的一切都凍成冰塊。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "頭突"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "刷冰衝撞"
		},

		effect: {
			'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×20點傷害。"
		},

		damage: "200-",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card