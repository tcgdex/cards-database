import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水伊布"
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "當水伊布開始微微顫動牠全身上下的鰭，就表示幾個小時之後要下雨了。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "水隱"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在備戰區，不會受到招式的傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "水炮"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×20點傷害。"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
