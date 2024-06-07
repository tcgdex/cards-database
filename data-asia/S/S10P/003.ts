import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 頑皮雷彈"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "體表的組織與球果的成分極為接近， 不可思議。當牠情緒焦躁時所放出 的電流，能量足以匹敵２０次的落雷。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "三重抽出"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出3張卡。"
		}
	}, {
		name: {
			'zh-tw': "煩煩炸彈"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card