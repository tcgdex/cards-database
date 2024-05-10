import { Card } from "../../../interfaces"
import Set from "../sv-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "名偵探皮卡丘"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "調查工作需要毅力。憑著不屈不撓的調查，找出案件的線索！"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "徹底調查"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，從自己的牌庫抽出與正面出現的次數相同數量的卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "騎行衝刺"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card