import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵毒蛾"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "無捕獲紀錄。資料不足。 其特徵與古書裡 所記載的物體一致。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸納"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "瘋狂拒絕"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到「古代」寶可夢招式的傷害。"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card