import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水君"
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "體內蘊藏著泉水般溫柔的寶可夢。會用滑行般的動作在大地上奔跑，有著淨化濁水的力量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "飛濺"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "極光閉環"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的【水】能量，放回手牌。"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card