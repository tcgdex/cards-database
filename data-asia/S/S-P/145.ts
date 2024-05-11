import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡比獸"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "每天不吃下４００公斤的食物絕不會善罷甘休。吃飽了就會開始睡覺。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "滾動衝撞"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "重磅衝擊"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card