import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狠辣椒ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "辣味制約"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "雙頭粉碎"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，將其丟棄。將對手的牌庫上方1張卡丟棄。"
		},

		damage: 140,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card