import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "保母蟲"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "用落葉發酵時產生的熱來幫蛋保溫。會以葉子為蟲寶包做襁褓。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "治癒之環"
		},

		effect: {
			'zh-tw': "將自己的所有備戰寶可夢的HP全部恢復。然後，將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "飛葉快刀"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card